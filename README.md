# Getting Started with Create React App

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
"# 2023_starter_quiz_final" 

# Quiz Application Documentation

## Summary
This project is a React-based quiz application forked off the following ripo https://github.com/wonder-phil/2024_starter_quiz_final featuring:
- Multiple questions quiz radio-type answers..
- A scoring system that determines the correct answers.
- Quiz, About, and Contact pages with intuitive navigation links.

## Key Features
### Quiz Functionality
- Users can answer multi-choice questions.
- Scoring appears smooth and intuitive:
  - **Improvement**: The score won't be shown as an irritating pop up. It will be shown on a separate **Scoring Page** after submission.
  - Users may rest the quiz and subsequently take up again-with complete ease.

### Contact Page
- Full-fledged **Contact Page** there is, where users can send in their feedback.
- And there is direct reception for feedback through **EmailJS**.
- Validation is done so that email, rating, and feedback are fine before submission.

### About Page:
- It has newly introduced an **About Page** with an explanation of the purpose and work of the project.
- It is a clickable **Website Title**(Welcome to The Coolest Hub Ever) that can redirect into the About Page.

### General Design Improvements
- Improved quiz layout for reading Should be full left aligned for the questions, while choices are multiple.
- Professional appearance and user friendly navigation links and overall styling.

---

## Directions for Running the Code

1. **Install Dependencies**:
   Run the following command in the project directory to install all required packages:
   ```bash
   npm install
   npm install emailjs-com

finally npm start