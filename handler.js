const awsServerlessExpress = require('aws-serverless-express');
const app = require('./dist/app');

// Allow API Gateway server the following static files format
const binaryMimeTypes = [
    'image/*',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'image/x-icon',
    'image/vnd.microsoft.icon',
    'font/otf',
];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

module.exports.express = (event, context) => awsServerlessExpress.proxy(server, event, context);
