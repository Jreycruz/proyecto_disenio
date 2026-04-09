import MOVIES from '../data/movies.json' with { type: 'json' }
import { v4 as uuidv4 } from 'uuid';
import { pool } from '../config/db.js'
export default class Movie {

    static getAll = async ({ genre, director, year } = {}) => {


        const [rows] = await pool.query(`SELECT 
                                    m.id, 
                                    m.title, 
                                    m.release_year,
                                    m.synopsis,
                                    GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genres,
                                    GROUP_CONCAT(DISTINCT d.full_name SEPARATOR ', ') AS directors
                                FROM movies m
                                LEFT JOIN movie_genres mg ON m.id = mg.movie_id
                                LEFT JOIN genres g ON mg.genre_id = g.id
                                LEFT JOIN movie_directors md ON m.id = md.movie_id
                                LEFT JOIN directors d ON md.director_id = d.id
                                GROUP BY m.id;`);


        //conectarse a la base de datos
        //hacer la consutla (query)
        // retornar los resultados

        //concatenar con un where
        if (genre) {
            //throw -> genera un error generico
            // throw Error('user not found')

            return MOVIES.filter((movie) => {
                return movie.genre.some((g) => {
                    return g.toLowerCase() === genre.toLowerCase()
                })
            })
        }
        //select *from 
        return rows
    }

    static find = async (id) => {

        const [rows] = await pool.query(`SELECT 
                                    m.id, 
                                    m.title, 
                                    m.release_year,
                                    m.synopsis,
                                    GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genres,
                                    GROUP_CONCAT(DISTINCT d.full_name SEPARATOR ', ') AS directors
                                FROM movies m
                                LEFT JOIN movie_genres mg ON m.id = mg.movie_id
                                LEFT JOIN genres g ON mg.genre_id = g.id
                                LEFT JOIN movie_directors md ON m.id = md.movie_id
                                LEFT JOIN directors d ON md.director_id = d.id
                                where m.id = :id
                                GROUP BY m.id;`, { id }); //bind param

        return rows
    }

    static create = async ({ input }) => {
        const connection = await pool.getConnection()

        try {
            await connection.beginTransaction()

            const [result] = await connection.query(
            `
                INSERT INTO movies (title, release_year, synopsis, poster_url)
                VALUES (:title, :release_year, :synopsis, :poster_url)
                `,
                {
                    title: input.title,
                    release_year: input.release_year ?? null,
                    synopsis: input.synopsis ?? null,
                    poster_url: input.poster_url ?? null
                }
            )

        const movieId = result.insertId

        if (input.genre) {
            for (const genreId of input.genre) {
                await connection.query(
                    `
                    INSERT INTO movie_genres (movie_id, genre_id)
                    VALUES (:movie_id, :genre_id)
                    `,
                    {
                        movie_id: movieId,
                        genre_id: genreId
                    }
                )
            }
        }

        if (input.director) {
            for (const directorId of input.director) {
                await connection.query(
                    `
                    INSERT INTO movie_directors (movie_id, director_id)
                    VALUES (:movie_id, :director_id)
                    `,
                    {
                        movie_id: movieId,
                        director_id: directorId
                    }
                )
            }
        }

        await connection.commit()

        const [rows] = await pool.query(
            `
            SELECT 
                m.id, 
                m.title, 
                m.release_year,
                m.synopsis,
                m.poster_url,
                GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genres,
                GROUP_CONCAT(DISTINCT d.full_name SEPARATOR ', ') AS directors
            FROM movies m
            LEFT JOIN movie_genres mg ON m.id = mg.movie_id
            LEFT JOIN genres g ON mg.genre_id = g.id
            LEFT JOIN movie_directors md ON m.id = md.movie_id
            LEFT JOIN directors d ON md.director_id = d.id
            WHERE m.id = :id
            GROUP BY m.id
            `,
            { id: movieId }
        )

        return rows[0]

        } catch (error) {
            await connection.rollback()
            throw error
        } finally {
            connection.release()
        }
    }

    static update = async ({ id, input }) => {
        const connection = await pool.getConnection()

        try {
            await connection.beginTransaction()

            await connection.query(
                `
                UPDATE movies
                SET title = :title,
                    release_year = :release_year,
                    synopsis = :synopsis,
                    poster_url = :poster_url
                WHERE id = :id
                `,
                {
                    id,
                    title: input.title,
                    release_year: input.release_year ?? null,
                    synopsis: input.synopsis ?? null,
                    poster_url: input.poster_url ?? null
                }
            )

            await connection.query(
                `DELETE FROM movie_genres WHERE movie_id = :id`,
                { id }
            )

            await connection.query(
                `DELETE FROM movie_directors WHERE movie_id = :id`,
                { id }
            )

            if (input.genre) {
                for (const genreId of input.genre) {
                    await connection.query(
                        `
                        INSERT INTO movie_genres (movie_id, genre_id)
                        VALUES (:movie_id, :genre_id)
                        `,
                        {
                            movie_id: id,
                            genre_id: genreId
                        }
                    )
                }
            }

            if (input.director) {
                for (const directorId of input.director) {
                    await connection.query(
                        `
                        INSERT INTO movie_directors (movie_id, director_id)
                        VALUES (:movie_id, :director_id)
                        `,
                        {
                            movie_id: id,
                            director_id: directorId
                        }
                    )
                }
            }

            await connection.commit()

            const [rows] = await pool.query(
                `
                SELECT 
                    m.id, 
                    m.title, 
                    m.release_year,
                    m.synopsis,
                    m.poster_url,
                    GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genres,
                    GROUP_CONCAT(DISTINCT d.full_name SEPARATOR ', ') AS directors
                FROM movies m
                LEFT JOIN movie_genres mg ON m.id = mg.movie_id
                LEFT JOIN genres g ON mg.genre_id = g.id
                LEFT JOIN movie_directors md ON m.id = md.movie_id
                LEFT JOIN directors d ON md.director_id = d.id
                WHERE m.id = :id
                GROUP BY m.id
                `,
                { id }
            )

            return rows[0]

        } catch (error) {
            await connection.rollback()
            throw error
        } finally {
            connection.release()
        }
    }

    static delete = async ({ id }) => {
    const [result] = await pool.query(
        `DELETE FROM movies WHERE id = :id`,
        { id }
    )

    return result
    }
}

