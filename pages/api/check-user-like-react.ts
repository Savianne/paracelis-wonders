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
        const userLikeReact = (await promisePool.query("SELECT COUNT(*) AS count FROM likes WHERE userEmail = ? AND destinationUID = ?", [userEmail, placeUID]) as RowDataPacket[])[0][0].count;
        
        res.status(200).json({ userLikeReact });
    } catch(err) {
        console.log(err)
        res.status(500).json({ status: "error", error: "Database connection error: " + err });
    }
}