
# React App Server-Side Rendering with Express and Serverless

This repository provides a solution for server-side rendering of a React app using Express and Serverless (or a traditional server setup). The main purpose of this solution is to inject dynamic meta tags fetched from an API before the application is rendered in the browser. By doing so, we address the SEO challenges typically associated with single-page applications while leveraging the benefits of server-side rendering.

## How it works

The application fetches dynamic meta tags from a WordPress API (feel free to adapt the code to fetch from other APIs). To avoid the cost and maintenance of a dedicated server, we utilize the Serverless framework to deploy the application on AWS Lambda and API Gateway services, alongside Express.

If you prefer a traditional server setup, you can skip the Serverless layer and run the application using Express on your server.

## Usage

1.  Install the dependencies by running `npm install` or `yarn install`.
    
2.  Before building the application, open the **Index.html** file and add the following tags within the `<head>` section:
        
        <title>React App</title>
        <meta name="title" content="React App" />
        <meta name="description" content="My description" />
        <meta property="og:image" content="My image" />
    
3.  Build the application (e.g., using `npm run build`).
    
4.  Copy the **build** folder to **/dist**.
    
5.  Customize the **seo.js** function in **/dist/utils** according to your specific needs.
    
6.  If you are using the Serverless Framework, deploy the application to AWS Lambda and API Gateway by running `sls deploy`.
    
7.  Enjoy the benefits of server-side rendering!
    

> If you decide to deploy the solution on a traditional server, you can safely delete the following files and folders:
> 
> -   handler.js
> -   serverless.yml
> 
> To run the application on your server, use `npm run server`.

Feel free to adapt and modify the code to suit your requirements.
