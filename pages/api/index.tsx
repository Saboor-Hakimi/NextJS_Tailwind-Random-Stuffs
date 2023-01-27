const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const apiKey = req.query.apiKey;

  //   validate the api key

  const data = [getRandomEmoji(), getRandomEmoji(), getRandomEmoji()];
  res.status(200).json({ data });
};

function getRandomEmoji() {
  return String.fromCodePoint(
    Math.floor(Math.random() * (0x1f600 - 0x1f300) + 0x1f300)
  );
}
