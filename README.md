# Smiley Miles V2

[![Codecov](https://codecov.io/gh/Sundy0828/smiley-miles-v2/branch/master/graph/badge.svg)](https://codecov.io/gh/Sundy0828/smiley-miles-v2)
[![Build Status](https://github.com/Sundy0828/smiley-miles-v2/actions/workflows/ci.yml/badge.svg)](https://github.com/Sundy0828/smiley-miles-v2/actions)

Welcome to the Smiley Miles V2 project! This is a React application designed for [brief description of your project].

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Infracost Setup](#infracost-setup)
- [Pipeline Setup](#pipeline-setup)
- [Codecov Token Setup](#codecov-token-setup)
- [AWS IAM User Creation](#aws-iam-user-creation)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Sundy0828/smiley-miles-v2.git
cd smiley-miles-v2
pnpm install
```

## Usage

To start the development server, run:

```bash
pnpm start
```

Then open your browser at `http://localhost:3000` to view the application.

## Scripts

Here are the scripts available in this project:

- `start`: Starts the development server.
- `build`: Builds the app for production.
- `clean`: Cleans the build, node_modules/.cache, and storybook-static directories.
- `build:storybook`: Builds the Storybook application.
- `test`: Runs the test suite.
- `test:ci`: Runs the test suite with coverage.
- `eject`: Ejects the configuration (only if you need to customize the setup).
- `storybook`: Starts the Storybook development server on port 6006.
- `lint`: Runs ESLint to check for linting errors.
- `lint:fix`: Runs ESLint with the fix option.
- `nuke`: Cleans the project and removes the node_modules directory.
- `convert-data:json`: Converts a text file to JSON data for testing purposes.

## Infracost Setup

Infracost is used to estimate the costs associated with your infrastructure as code. To set it up, follow these steps:

1. Create an Infracost Account: Go to Infracost Sign Up to create your account.

2. Obtain Your API Key: After creating your account, follow these steps to get your API key:
   - Go to the settings dropdown in your Infracost dashboard.
   - Select Org Settings.
   - Click on API Token.
   - Copy your token.
3. Run Infracost: Use the following command to run Infracost with your API key:

   ```bash
   INFRACOST_API_KEY="{your_api_key}" infracost breakdown --path ./path/to/terraform/directory
   ```

## Pipeline Setup
To set up a continuous integration/continuous deployment (CI/CD) pipeline, follow these steps:

1. Select Your CI/CD Tool: Choose a CI/CD service (e.g., Travis CI, GitHub Actions, CircleCI).

2. Create a Configuration File: Depending on your selected service, create a configuration file (e.g., .travis.yml for Travis CI, .github/workflows/main.yml for GitHub Actions).

3. Define the Build Steps: Include build and test steps in the configuration file to automate your deployment process.

4. Connect to Your Repository: Make sure your pipeline is connected to your GitHub repository to automatically trigger builds on push or pull requests.

## Codecove Token Setup
To enable code coverage reporting with Codecov, follow these steps:

1. Obtain Your Codecov Token:

  - Go to your Codecov dashboard.
  - Navigate to your project settings.
  - Find the "Codecov Token" in the settings page.

2. Add the Token to GitHub Secrets:

  - Go to your GitHub repository.
  - Navigate to Settings > Secrets and variables > Actions.
  - Click New repository secret.
  - Enter CODECOV_TOKEN as the name and paste your token as the value.

3. Update Your CI/CD Configuration: Ensure your CI/CD configuration includes a step to upload coverage reports to Codecov, typically using:

```bash
bash <(curl -s https://codecov.io/bash)
```

## AWS IAM User Creation
To create an AWS IAM user with permissions to perform CRUD operations on S3 buckets and CloudFront distributions, follow these steps:

1. Sign in to the AWS Management Console.

2. Navigate to IAM:

  - Choose Users from the sidebar.
  - Click Add user.

3. Configure User Details:

  - Enter a user name.
  - Select Programmatic access for Access type.

4. Set Permissions:

  - Choose Attach existing policies directly.
  - Search for and select the AmazonS3FullAccess policy for S3 access.
  - Search for and select the CloudFrontFullAccess policy for CloudFront access.
  - Alternatively, create a custom policy if you need more specific permissions.

5. Complete User Creation:

  - Review your selections and click Create user.
  - Copy the Access Key ID and Secret Access Key for later use.

## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
