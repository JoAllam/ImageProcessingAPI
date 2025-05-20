# ImageProcessingAPI
A Single-Webpage Website that allows you to upload images to a specific directory (let's call it myDirectory)
and resize these images later whenever you like. 
The Webpage shows a gallery of the images in myDirectory and allows you to choose an image from them to resize.

## Endpoints:-

- / : the main page and server, it shows the gallery and forms to upload or resize images
- /upload : the route that handles uploading images
- /resize : the route that handles resizing images
- /images : a route that sends the images in myDirectory to the webpage so the gallery is updated regularly

These are the main routes you will need to know in order to navigate the project.
There are other routes but you don't need access to them as they are only necessary for the main routes to work.

You don't need to navigate to any of the routes except the main route, as the main route provides forms that accesses the other routes and exploits their functions.

## Scripts:-
- npm run build: to build typescript files into javascript files
- npm run start: to start the server (application)
- npm run test: to run the tests
- npm run eslint: to run eslint to lint the code
- npm run prettierCheck: to run prettier and make it check for any recommended actions
- npm run prettierWrite: to run prettier and force recommended actions

## Tests:- 
There are four suites for the four main routes.
The tests only check for the default actions without any input provided or errors invoked.

