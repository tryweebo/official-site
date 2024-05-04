# Contributing

Welcome to the "Weebo Official Website project"! We appreciate your interest in contributing to our open-source project. This document outlines the guidelines and best practices for contributing to the project effectively. By following these guidelines, you can help us maintain a collaborative and efficient development process.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
   - [Setting Up the Project](#setting-up-the-project)
   - [Creating a Branch](#creating-a-branch)
3. [Contributing](#contributing)
   - [Bug Reports](#bug-reports)
   - [Feature Requests](#feature-requests)
   - [Pull Requests](#pull-requests)
4. [Coding Guidelines](#coding-guidelines)
   - [Code Style](#code-style)
   - [Documentation](#documentation)
   - [Unit Tests](#unit-tests)
5. [Communication](#communication)
6. [License](#license)

<br/>

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md). Please read it carefully before contributing. By participating, you are expected to uphold the Code of Conduct.

<br/>

## Getting Started

### Setting Up the Project

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
   ```
   git clone https://github.com/tryweebo/official-website.git
   ```
3. Install the required dependencies.
   ```
   npm install
   ```

### Creating a Branch

Before starting your work, create a new branch to work on your changes.

1. Checkout the `main` branch.
   ```
   git checkout main
   ```
2. Create a new branch with a descriptive name for your feature or bug fix.
   ```
   git checkout -b your-feature-name
   ```

<br/>

## Contributing

We welcome various forms of contributions, including bug reports, feature requests, and pull requests.

### Bug Reports

If you encounter a bug or unexpected behavior in the project, please follow these steps:

1. Ensure the bug hasn't been reported already by searching the [issue tracker](https://github.com/tryweebo/official-website/issues).
2. If the bug hasn't been reported, [open a new issue](https://github.com/tryweebo/official-website/issues/new) and provide a clear title and description of the problem.
3. Include steps to reproduce the bug and provide any relevant code snippets or error messages.
4. Be responsive to any follow-up questions or requests for clarification.

### Feature Requests

If you have a suggestion for a new feature or enhancement, please follow these steps:

1. Check the [issue tracker](https://github.com/tryweebo/official-website/issues) to see if the feature has been requested before.
2. If it hasn't been requested, [open a new issue](https://github.com/tryweebo/official-website/issues/new).
3. Clearly describe the feature you'd like to see, including its purpose and any specific requirements or dependencies.
4. Engage in any discussions or clarifications related to the feature request.

### Pull Requests

We appreciate pull requests from the community. To contribute your changes via a pull request, please follow these steps:

1. Make sure your forked repository is up to date with the `main` branch.
   ```
   git fetch origin
   git checkout main
   git pull origin main
   ```
2. Create a new branch for your changes.
   ```
   git checkout -b your-feature-name
   ```
3. Implement your changes, adhering to

the [coding guidelines](#coding-guidelines) mentioned below. 4. Commit your changes with clear and descriptive commit messages.

```
git commit -m "👍 chore: your feature description"
```

5. Push your branch to your forked repository.
   ```
   git push
   ```
6. Open a new pull request from your branch to the `main` branch of the main repository.
7. Provide a concise description of your changes in the pull request, along with any relevant information.
8. Be responsive to any feedback or review comments related to your pull request.

<br/>

## Coding Guidelines

### Code Style

- Follow the existing code style and conventions used in the project.
- Use consistent indentation and naming conventions.
- Write clear and self-explanatory code that is easy to read and understand.
- Comment your code where necessary to provide additional context or explain complex logic.

### Documentation

- Maintain high-quality documentation to help others understand and use the project effectively.
- Document new features, APIs, and important changes in the project.
- Write clear and concise documentation using markdown format.
- Update existing documentation if changes affect its accuracy or completeness.

### Unit Tests

- Write unit tests for new features and bug fixes whenever applicable.
- Ensure all existing tests pass before submitting a pull request.
- Aim for good test coverage to maintain code quality and stability.

<br/>

## Communication

We encourage open and respectful communication within the community. You can reach out to us through the following channels:

- [GitHub Issues](https://github.com/tryweebo/official-website/issues) for bug reports, feature requests, and general discussions.

<br/>

## License

By contributing to the Event Planner project, you agree that your contributions will be licensed under the project's [LICENSE](./LICENSE).
