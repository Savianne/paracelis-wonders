import pool from '@/app/api/mysql/connectionPool';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RowDataPacket, OkPacketParams } from 'mysql2';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(!(req.method === "POST")) return res.status(405).end(`Method ${req.method} Not Allowed`);

    const {placeUID, userEmail} = req.body.data;

    const promisePool = pool.promise();
    try {
        const connection = await promisePool.getConnection();

        try {
            //delete the current heart reaction 
            const affectedRows = (await connection.query("DELETE FROM likes WHERE userEmail = ? AND destinationUID = ?", [userEmail, placeUID]) as OkPacketParams[])[0].affectedRows;
            
            if(affectedRows && affectedRows > 0) {
                res.status(200).json({ status: "success" });
            } else {
                res.status(500).json({ status: "error", error: "Action Failed" });
            }
        } catch(err) {
            console.log(err)
            res.status(500).json({ status: "error", error: "Database connection error: " + err });
        }
        finally {
            connection.release();
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: "error", error: "Database connection error: " + err });
    }
    
}