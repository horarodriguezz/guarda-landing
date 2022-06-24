# GUARDA Y CUSTODIA LANDING PAGE

## Environment variables to configure

1. **NEXT_PUBLIC_LOGIN_URL** = Url to redirect when an user clicks on the _"Log In"_ button or the user logo in the navbar
2. **NEXT_PUBLIC_FORM_POST_URL** = Url where to send the POST request of the _form_.
3. **NEXT_PUBLIC_HOSTNAME** = The domain of the page, including the protocol, eg: https://guarda.boxcustodia.com

## Commands

1. run npm install to install the dependencies
2. npm run dev - runs the development local server
3. npm run build - create a production build
4. npm start - runs the production build locally
5. npm export - export the app to static HTML files which can be deployed without the need of a nodejs server

## FORM POST REQUEST

The form in the last of the page makes a post request to the URL defined in the environment variable NEXT_PUBLIC_FORM_POST_URL. It sends a body with the following fields:

1. name
2. phone
3. email
4. company
5. message

Once it sends the request, expect a response status 2xx in order to show the "succesfull modal" to the user other status codes will not trigger the modal. If the fetch fails, will show the modal but the message will be "There was an error please try again".

### To change the favicon simply replace the favicon.ico in the /public folder, be care to use the same name "favicon.ico"
