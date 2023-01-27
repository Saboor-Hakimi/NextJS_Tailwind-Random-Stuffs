const { randomBytes } = require("crypto");
export default async (req, res) => {
  const apiKey = randomBytes(20).toString("hex");

  res.status(200).json({ apiKey });
};
