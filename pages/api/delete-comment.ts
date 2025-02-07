import pool from '@/app/api/mysql/connectionPool';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RowDataPacket, OkPacketParams } from 'mysql2';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(!(req.method === "POST")) return res.status(405).end(`Method ${req.method} Not Allowed`);

    const {commentId} = req.body.data;

    const promisePool = pool.promise();

    try {
        const affectedRow = (await promisePool.query("DELETE FROM userscomments WHERE id = ?", [commentId]) as OkPacketParams[])[0].affectedRows;
        
        if(affectedRow) {
            res.status(200).json({ status: 'success' });
        } else {
            res.status(500).json({status: "error", error: "failed to delete"})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({ status: "error", error: "Database connection error: " + err });
    }
}