# Smiley Miles V2

[![Coverage Status](https://coveralls.io/repos/github/Sundy0828/smiley-miles-v2/badge.svg?branch=master)](https://coveralls.io/github/Sundy0828/smiley-miles-v2?branch=master)
[![Build Status](https://img.shields.io/travis/Sundy0828/smiley-miles-v2/master.svg)](https://travis-ci.org/Sundy0828/smiley-miles-v2)

Welcome to the Smiley Miles V2 project! This is a React application designed for [brief description of your project].

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Infracost Setup](#infracost-setup)
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

## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
