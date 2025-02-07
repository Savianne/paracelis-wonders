import pool from '@/app/api/mysql/connectionPool';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RowDataPacket } from 'mysql2';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const {placeUID} = req.body.data;
    
    const promisePool = pool.promise();

    try {
        const connection = await promisePool.getConnection();

        try {
            const comments = (await connection.query(`
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
                uc.destinationUID = ?
            ORDER BY 
                uc.date DESC;    
            `, [placeUID]) as RowDataPacket[])[0];
            res.status(200).json({status: 'success', comments});
        } catch(err) {
            console.log(err)
            res.status(500).json({ status: "error", error: err });
        } finally {
            connection.release()
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: "error", error: "Database connection error: " + err });
    }
    
}