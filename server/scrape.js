const { default: axios } = require("axios");
const cheerio = require("cheerio");
const fs = require("node:fs");

module.exports = async ({ url, selector, html }) => {

    var result;

    const parse = (resp) => {

        const $ = cheerio.load(resp.data);

        if (!selector) {
            selector = "";
        }

        let ele = $(selector).toArray();
        ele.forEach((i, e) => {

            console.log("---------------------------------------------")
            console.log(i, e)
        })

        return $(selector);
        // return (html == "true") ? $.html(selector) : $(selector).text();
    }

    await axios.get(url).then((r) => {

        result = parse(r)
    });

    return result;
}