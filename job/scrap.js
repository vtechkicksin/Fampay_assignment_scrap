const videoModel = require("../models/videoModel");
const puppeteer = require('puppeteer');
const mongoose = require("mongoose");


async function scrapeYoutubeSearch(searchQuery) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${searchQuery}`);
    
    await page.waitForSelector('#contents');
    const videos = await page.evaluate(() => {
         
        const videoElements = Array.from(document.querySelectorAll('#contents > ytd-video-renderer'))
            .map(content => {
                return ({
                    title: content.querySelector('#video-title').innerText,
                    description: content.querySelector('.metadata-snippet-text-navigation').innerText,
                    imgUrl: content.querySelector('.yt-core-image').src,
                    views : content.querySelector('#metadata-line span:nth-of-type(1)').innerText,
                    time: content.querySelector('#metadata-line span:nth-of-type(2)').innerText
                });
            });
        return videoElements;
    });
    await browser.close();
    return videos;
}

const insertVideos = async() => {

    const videos = await scrapeYoutubeSearch("football");
    await videoModel.insertMany(videos, { ordered: false }, function(error, docs) {
      if (error) {
        console.log(error);
      } else {
        console.log('Documents inserted:', docs);
      }
    });
}

insertVideos();

module.exports = insertVideos;