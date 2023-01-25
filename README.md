# Tv Series search

## Tech stack
### React, JavaScript, CSS Modules, Fetch API, Redux, SVG

## What I have done
- initialized the React app using npx create-react-app
- Study figma mocks and developed and tested atomic components
- composite components developments using atomic components
- Layout developments
- Pages  developments
- Hard corded show list and test all UI and fix errors
- Fixed responsive errors
- Add react routs and test with dummy data to plan dynamic routs
- add redux and replace dummy values with real data that fetched from DB
- set search value based on the search input result

## What I Can improve if I have more time
- This could be done using typeScript. But It takes considerable time compared to React. But It gives more future benefits.
- currently show detailed page functions using dummy values. need to get data from API.
- Error state can be handled. Also found some error triggered with null data from the server. Those fixes could be done.
- Need to move data fetching and state management into a custom Hook. so that It will be easy to handle API in different modules.
- There are some style improvements that need to be done. Within a short time It was difficult.
- Responsiveness could be improved more
- definitely Test cases can be written. Unit test, structural test can be done. Specially the inbuilt test using react testing lib and jest can expand more. Also better to have an e2e test. but we need to make the above improvements before it.
- Can add more CSS variables and add theme files and make the project more configurable. So that we can implement the theme easily with the help of the theme engine.
- React storybooks can be integrated into this project and we can write stories (UI test cases) from atomic components to page levels. Furthermore it supports redux and react routes. so we can test screen flow and UI behaviour with state independently from the backend.
To save time I didn't use react PropTypes for all components. It would be better if we use them since react with JavaScript is not giving errors in completion like TypeScript.
- I used JavaScript Fetch API to fetch the data at the moment. It would be easier to handle if we use libraries like axios.
- We can add the lazy loading feature to improve user experience speed up.
- Also Next JS always comes with a strong way to overcome react limitation. So if I write this using the next JS we can improve SEO and speedup with the help of server side rendering.
- Also I could have taken all hard coded strings into a single file and used them to reduce the duplication and make the app more configurable.
- SASS with CSS variables is more flexible than CSS modules. I used the css module since in the description it mentioned that it is nice to have only CSS.
- Also I noticed that in the mockup helvetica was the font that was used. It would be great to attach fonts with requirements since we can include them into the asset folder and use font-face as CSS variables.
- Also It would be great if I use the React router to handle the data fetching part as well. So that we could reduce the usage of lifecycle hooks and use a clean approach to make it. To be honest I didn't have enough knowledge to do so. Thesedays, I'm playing around with them. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
