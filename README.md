# 🧪 Conduit UI Test Automation

This project contains UI automated tests for [Conduit](https://conduit.mate.academy/) using **JavaScript** with **Playwright**.

## 📦 Tech Stack

- [Playwright](https://playwright.dev/) for end-to-end testing
- [Allure](https://docs.qameta.io/allure/) for test reporting
- [Faker.js](https://github.com/faker-js/faker) for generating test data
- [Dotenv](https://github.com/motdotla/dotenv) for managing environment variables

---

## 📂 Project Structure
```
conduit-tests/
├── .github/workflows/           # GitHub Actions CI configuration
├── constants/                   # Constants (e.g., error messages)
├── fixtures/                    # Custom Playwright fixtures (with POM injection)
├── pages/                       # Page Object Model classes
├── reports/                     # Output folder for Allure and Playwright reports
│   ├── allure-results/
│   ├── allure-report/
│   └── playwright-report/
├── tests/                       # Test specifications
├── utils/                       # Utility functions (data generation, credentials, etc.)
├── .env                         # Environment variables (not committed)
├── .env.example                 # Example of environment variables
├── package.json                 # Project config and scripts
├── playwright.config.js         # Playwright configuration
└── README.md                    # Project documentation
```


---

## ⚙️ Setup

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/poltorak-vladyslav/conduit-tests.git
cd conduit-tests
npm install
```
2. Configure .env
Create a .env file based on the example:
```bash
cp .env.example .env
```
## ✅ Running Tests

Run all tests:
```bash
npm run test:all
```

## 📊 Generating Allure Report

Generate & open Allure report:
```bash
npm run allure:report
```
Clean Reports:
```bash
npm run clean:reports
```
GitHub Pages Report: The latest Allure report is auto-published to: https://poltorak-vladyslav.github.io/conduit-tests/

## 🤝 Contribution

Feel free to fork and contribute improvements. PRs are welcome!