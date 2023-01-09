'use strict';

const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { seo, isPathToSeo } = require('./utils/seo');
const nocache = require('nocache');

app.use(nocache());

app.set('etag', false);

app.use(bodyParser.urlencoded({ extended: true }));

const indexPath = path.resolve(__dirname, 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, 'build'), { maxAge: '0d' }));

app.get('*', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end();
        }

        if (isPathToSeo(req.originalUrl)) {
            // Fetch metadata from API
            const meta = await seo(req.originalUrl);
            console.log(meta);

            // Add this custom values in your index.html before build the application
            // to inject succesfully
            htmlData = htmlData
                .replaceAll('React App', meta.title)
                .replaceAll('My description', meta.og_description)
                .replaceAll('My image', meta.og_image)
                .replaceAll('My Url', meta.og_url);
        }

        // console.log(htmlData);

        console.log(res.getHeaders());

        // serve application rendered
        res.send(htmlData);
        res.end();
    });
});

module.exports = app;
