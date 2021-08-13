/* eslint-disable no-unused-vars */
const fetch = require("node-fetch");
const cheerio = require("cheerio");
module.exports = {
  getData: async function(req, res) {
    const url = req.body.data_url;
    console.log('body', req.body)
    console.log("url", url);
    try {
      const response = await fetch(url);
      const body = await response.text();
      const $ = cheerio.load(body);
      const title = $("#productTitle")
        .text()
        .trim();
      const price = $("#priceblock_ourprice")
        .text()
        .trim();
      const rating = $(".a-star-4-5")
        .text()
        .trim();
      const image = $(".imgTagWrapper img").attr("src");
      res.json({ title: title, price: price, rating: rating, image: image });
    } catch (err) {
      res.json({ error: err });
    }
  },
};
