# IPL Social

## Student information

Name: Yassin
First name: Khaldi Mellagui
Vinci email: yassin.khaldi@student.vinci.be

## GitHub repository

https://github.com/yasskld/ipl-social

## Project description

This project implements an email validation function written in TypeScript.
The development follows a Test Driven Development (TDD) approach using Jest.
A Continuous Integration pipeline is configured with GitHub Actions to
automatically run the tests on each push and on pull requests to the main branch.

The email validation rules are implemented manually, without using any
pre-built email validation libraries.

## Code quality and tooling

This project uses additional tools to ensure code quality and consistency:

- **ESLint** is configured to statically analyze the TypeScript code and detect potential errors and bad practices.

- **Prettier** is used to automatically format the code in a consistent way.
- ESLint and Prettier are integrated in the development workflow.
- The Continuous Integration pipeline runs the linter and the tests to ensure code quality on each push and pull request.

These tools help maintain a clean, readable and maintainable codebase.

## Run the tests

```bash
npm test
```
