import pool from '@/app/api/mysql/connectionPool';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RowDataPacket, OkPacketParams } from 'mysql2';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(!(req.method === "POST")) return res.status(405).end(`Method ${req.method} Not Allowed`);

    const {placeUID, userEmail, comment} = req.body.data;

    console.log(req.body)
    const promisePool = pool.promise();
    try {
        const connection = await promisePool.getConnection();

        try {

            await connection.beginTransaction();

            const inserId = (await connection.query("INSERT INTO userscomments (userEmail, destinationUID, comment) VALUES (?, ?, ?)", [userEmail, placeUID, comment]) as OkPacketParams[])[0].insertId;
            
            const data = (await connection.query(`
                SELECT 
                    uc.id, 
                    uc.comment, 
                    uc.destinationUID, 
                    uc.date, 
                    u.name, 
                    u.email, 
                    u.dp
                FROM 
                    userscomments AS uc
                JOIN 
                    users AS u 
                    ON uc.userEmail COLLATE utf8mb4_general_ci = u.email
                WHERE 
                    uc.id = ?;    
                `, [inserId]) as RowDataPacket[])[0][0];

            await connection.commit();

            res.status(200).json({ status: "success", comment: data});
            
        } catch(err) {
            console.log(err)
            res.status(500).json({ status: "error", error: "Database connection error: " + err });
            connection.rollback()
        }
        finally {
            connection.release();
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: "error", error: "Database connection error: " + err });
    }
    
}