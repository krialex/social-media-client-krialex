# Social Media Client - krialex

## Description

This is a page forked from Noroff, where i have been working on workflows and testing of its content.

## Built with

- HTML/Bootstrap

- CSS/Scss

- Javascript

## Getting started

To get a local copy of this project follow this next steps:

### Installing

1. **Clone the repo:**

```bash
git clone URL HER
```

2. **Install dependencies:**

```bash
npm install
```

4. **Install Sass (if not already installed globally):**

```
npm install -g sass
```

### **Run the project:**

```bash
npm build
```

```bash
npm run start
```

## Testing

The project uses various testing framewoks and tools. This is to ensure code quality and functionality.

### Formatting and Linting

- Prettier: Formats code.

- ESLint: Checks for linting issues in the JavaScript files.

These checks are run automaticly on commit hooks. It uses lint-staged and Husky to do so.

### Unit testing

- Jest is used for unit testing Javascript code.

run unit test:

```bash
npm test
```

#### Test details

- Tests if a token is stored when provided with vaild credentials.

- Tests that the storage is cleared when user clicks logout.

### End-to-End testing

- Cypress is used for E2E testing to ensure that the project behaves the way a real browser would for a user.

Open Cypress for E2E-testing in the Cypress Test Runner:

```bash
npm run test-e2e
```

#### Test details

- Login test: Verifies that users can log in with valid credentials, checks the URL redirection and that the token is in storage.

- Invalid login test: Verifies that users cant login without valid credentials, and that a error message is being shown the user. This test fails, becase it is no error message to show.

- Logout test: Verifies that users can log out and checks the URL redirection and token removal from storage.

## Acknowledgements

- Noroff: For providing this project.
