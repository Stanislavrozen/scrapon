const { default: axios } = require("axios");
const cheerio = require("cheerio");
const fs = require("node:fs");

module.exports = async ({ url, selector, html }) => {

    var result;

    const parse = (resp) => {

        const $ = cheerio.load(resp.data);

        return $(selector).toArray().map((item, idx) => {

            console.log(html)
            if (html == "true") {
                return $.html(item).replace(/\s\s+/g, '');
            }
            else {
                return $(item).text();
            }
        })
    }

    await axios.get(url).then((r) => {

        result = parse(r)
    });

    return result;
}