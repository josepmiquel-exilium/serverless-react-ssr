# React App Server-Side Rendering with with Express and Serverless (or not).

This solution results from the need to inject dynamic meta tags fetched from an API before the browser renders the application. In this way, we allow robots to read our tags and we resolve the SEO problem of a Single Page Application and enjoy the benefits of a Server Side Rendering Application.

To save us the economic cost of a server and its maintenance, we will use the Serverless framework deploying the application in AWS using a Lambda, API Gateway services and Express.

In my case, I'm fetching the dynamic tags from a Wordpress API but feel free to adapt the code to your needs as well as skipping the Serverless layer and using Express on a server.

# How to use

1.  Install the dependencies with `npm install` or `yarn install`
2.  Before build the application, edit **_Index.html_** `<head> </head>` adding the following tags:
    `<title>React App</title>`
    `<meta  name="title"  content="React App" />`
    `<meta  name="description"  content="My description" />`
    `<meta  property="og:image"  content="My image" />`

3.  Build the application (in my case with `npm run build`)
4.  Copy the _build_ folder into _/dist_
5.  Customize to your needs the _seo.js_ function in _/dist/utils_
6.  Deploy to AWS with `sls deploy` _(only if you are using Serverless Framework)_
7.  **Enjoy!**

> If you are going to deploy the solution in a server, you can delete the following files and folders:
>
> -   handler.js
> -   serverless.yml
>
> and run the application in your server with `npm run server`
