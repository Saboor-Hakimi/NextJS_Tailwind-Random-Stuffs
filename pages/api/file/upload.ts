import type { NextApiRequest, NextApiResponse } from "next";

// handle uploaded file using multiler
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const upload = multer({
    storage: multer.diskStorage({
      destination: async (req, file, cb) => {
        const dir = path.join(process.cwd(), "../../../public", "uploads");
        await fs.mkdir(dir, { recursive: true });
        cb(null, dir);
      },
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const id = uuidv4();
        cb(null, `${id}${ext}`);
      },
    }),
  });

  //   response to client

  upload.single("file")(req, res, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ name: req.file.filename });
    }
  });
}
