This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Context

After the proposed [chalenge](https://github.com/Faire/ui-assignment) by Faire, I took a shot doing it using React.
To speed up things, I used the Create-React-App to have the whole configuration done. That kind of costed me some time with some problems with CORS and I wasn't able to make the Enzyme work correctly with the built-in configs =( .

I took me awhile, but I'm happy with the outcome. The assignment give us an amount of freedom that actually is hard to deal with. So, from what I understood, the main goal of this assignment was to create an UI that could use the APIs provided by Faire and show the makers by categories. Since the time was short, I didn't make the details pages for the makers, so, I redirected the user to the Maker's page in Faire's website.

The stack used was:

- React;
- React-Router (For routing)
- Redux (For state Management)

For the Layout, I tried to keep something clean and close to Faire's, but that is not my area of expertise as you can see... haha

![Some kind of Demo here](http://g.recordit.co/r5tGiFbzbd.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

To avoid problem with CORS, I had to implement a small proxy with NodeJS. So, in order to make the app run smoothly, also run `node server.js` in the root directory of this repository.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
I wanted to right some tests, but failed... I couldn't make it work on time before the deadline.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
