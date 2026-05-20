
# Advanced Enterprise Playwright TypeScript Framework

A comprehensive, production-ready automation testing framework combining UI and API testing capabilities with enterprise-level features.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Configuration](#configuration)
- [Framework Components](#framework-components)
- [CI/CD Integration](#cicd-integration)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

## Overview

This framework provides a robust foundation for UI and API automation testing using Playwright with TypeScript. It follows enterprise design patterns including Page Object Model (POM), maintains centralized configuration, implements comprehensive logging, and includes multiple reporting mechanisms for CI/CD pipelines.

**Version:** 2.0.0  
**Node Version:** 16+ required  
**Playwright Version:** 1.53.0+

## Features

✅ **Dual Testing Support**
- UI Automation with Playwright
- API Testing with REST endpoints

✅ **Architecture & Design**
- Page Object Model (POM) implementation
- Reusable API client layer
- Centralized configuration management
- Type-safe TypeScript development

✅ **Data & Validation**
- Dynamic test data generation (Faker.js)
- JSON Schema validation (AJV)
- Request/Response validation

✅ **Reporting & Monitoring**
- HTML Report Generation
- Allure Report Integration
- Winston Logging (file & console)
- Screenshots on failure
- Video recordings
- Trace files

✅ **Execution & CI/CD**
- Parallel test execution
- Automatic retry mechanism
- Test grouping (@smoke, @regression)
- GitHub Actions CI/CD ready
- Environment-based configuration

✅ **Test Organization**
- Smoke tests
- Regression tests
- E2E test scenarios
- API contract testing

## Prerequisites

- **Node.js**: 16.0.0 or higher
- **npm**: 8.0.0 or higher
- **Git**: For version control
- **Allure CLI**: For advanced reporting (optional but recommended)

### Platform-Specific Requirements

**Windows:**
```bash
# Using Chocolatey (recommended)
choco install nodejs allure

# Or download from nodejs.org
```

**macOS:**
```bash
brew install node allure
```

**Linux:**
```bash
sudo apt-get install nodejs npm
# For Allure, download from official site
```

## Installation

### Step 1: Clone/Setup Project
```bash
git clone <repository-url>
cd TestVagrnantAssign
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Install Browsers
```bash
npx playwright install
```

### Step 4: Install Allure CLI (Optional)
```bash
# Windows
choco install allure

# macOS
brew install allure

# Other systems - download from:
# https://docs.qamind.com/allure/latest/
```

### Step 5: Verify Installation
```bash
npm test -- --list
```

## Project Structure

```
TestVagrnantAssign/
├── src/
│   ├── api/
│   │   └── schemas/
│   │       └── booking.schema.json          # API response schema
│   ├── pages/
│   │   ├── CheckoutPage.ts                  # Page Object: Checkout
│   │   ├── LoginPage.ts                     # Page Object: Login
│   │   └── ProductPage.ts                   # Page Object: Products
│   └── utils/
│       ├── config.ts                        # Configuration & env vars
│       ├── logger.ts                        # Winston logging setup
│       └── schemaValidator.ts               # Schema validation utility
│
├── tests/
│   ├── api/
│   │   ├── auth.spec.ts                     # Authentication API tests
│   │   ├── booking-create-update.spec.ts    # Booking CRUD operations
│   │   ├── booking-delete.spec.ts           # Booking deletion tests
│   │   ├── booking-e2e.spec.ts              # End-to-end booking flow
│   │   └── booking-get.spec.ts              # Booking retrieval tests
│   └── ui/
│       ├── checkout.spec.ts                 # UI: Checkout flow
│       ├── e2e.spec.ts                      # UI: End-to-end scenarios
│       ├── login.spec.ts                    # UI: Login functionality
│       └── product.spec.ts                  # UI: Product browsing
│
├── allure-results/                          # Allure test results (auto-generated)
├── allure-report/                           # Allure report (auto-generated)
├── test-results/                            # Playwright test results
├── playwright-report/                       # Playwright HTML report
│
├── .env                                     # Environment variables (not in repo)
├── .env.example                             # Example env file
├── .gitignore                               # Git ignore rules
├── playwright.config.ts                     # Playwright configuration
├── tsconfig.json                            # TypeScript configuration
├── package.json                             # Project dependencies
└── README.md                                # This file
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run UI Tests Only
```bash
npm run test:ui
```

### Run API Tests Only
```bash
npm run test:api
```

### Run Smoke Tests
```bash
npm run smoke
```

### Run Regression Tests
```bash
npm run regression
```

### Run Specific Test File
```bash
npx playwright test tests/ui/login.spec.ts
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run with UI Mode (Visual Test Runner)
```bash
npx playwright test --ui
```

### Run with Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run with Specific Tag
```bash
npx playwright test --grep @regression
npx playwright test --grep @smoke
```

### View Test Results
```bash
npm run report
```

## Reporting

### Playwright HTML Report

View the built-in HTML report after test execution:
```bash
npm run report
```

The report includes:
- Test execution timeline
- Failure reasons
- Screenshots
- Videos
- Trace files

### Allure Report

#### First-Time Setup

Install Allure CLI:

**Windows (Chocolatey):**
```bash
choco install allure
```

**macOS (Homebrew):**
```bash
brew install allure
```

**Other Platforms:**
Download from [Allure Documentation](https://docs.qamind.com/allure/latest/)

#### Generate & View Report

```bash
# Generate Allure report and open in browser
npm run allure:report

# Generate report without opening
npm run allure:generate
```

#### Allure Report Features
- ✅ Detailed test execution reports
- ✅ Screenshots on failure
- ✅ Video recordings
- ✅ Test history & trends
- ✅ Time statistics
- ✅ Failure analysis
- ✅ Environment info

## Configuration

### Environment Variables

Create a `.env` file in the project root (copy from `.env.example`):

```bash
# API Configuration
API_BASE_URL=https://restful-booker.herokuapp.com
API_TIMEOUT=30000

# UI Configuration
BASE_URL=https://your-app-url.com
HEADLESS=true

# Credentials (if needed - never commit to repo)
USERNAME=demo_user
PASSWORD=demo_password

# Logging
LOG_LEVEL=info
```

### Playwright Configuration

Edit `playwright.config.ts` to customize:
- Timeout settings
- Retry policy
- Screenshot/Video capture
- Trace recording
- Browser specific settings

```typescript
export default defineConfig({
  testDir: './tests',
  retries: 1,                           // Retry failed tests once
  fullyParallel: true,                  // Run tests in parallel
  timeout: 30000,                       // Test timeout: 30 seconds
  expect: {
    timeout: 5000                       // Assertion timeout: 5 seconds
  },
  reporter: [
    ['html'],                           // Playwright HTML report
    ['list'],                           // Console output
    ['allure-playwright']               // Allure report
  ],
  use: {
    headless: true,                     // Run in headless mode
    screenshot: 'only-on-failure',      // Screenshot on failure
    trace: 'retain-on-failure',         // Retain trace on failure
    video: 'retain-on-failure'          // Retain video on failure
  }
});
```

## Framework Components

### Page Object Model (POM)

Encapsulates UI elements and interactions:

```typescript
// src/pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}
```

### API Client Layer

Centralized API request handling with schema validation:

```typescript
// Example: API test with validation
async function createBooking() {
  const response = await apiClient.post('/booking', bookingData);
  validateSchema(response.data, bookingSchema);
}
```

### Logging

Winston-based logging with file and console outputs:

```typescript
import { logger } from './utils/logger';

logger.info('Test started');
logger.error('Test failed', { error: err });
```

### Schema Validation

JSON Schema validation for API responses:

```typescript
import { validateSchema } from './utils/schemaValidator';

const response = await fetch(url);
validateSchema(response, schema);  // Throws if invalid
```

## CI/CD Integration

### GitHub Actions

Add this workflow file `.github/workflows/test.yml`:

```yaml
name: Automated Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npm run regression
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

### Jenkins Integration

For Jenkins pipelines, add a Jenkinsfile to your repository for automated execution.

### Test Execution Strategy

- **Pull Requests:** Run smoke tests
- **Main Branch:** Run full regression suite
- **Scheduled:** Run daily regression tests
- **On Demand:** Manual execution of specific test suites

## Troubleshooting

### Common Issues

**Issue: Tests timeout**
```bash
# Increase timeout in playwright.config.ts
timeout: 60000  // 60 seconds
```

**Issue: Browser not found**
```bash
npx playwright install
npx playwright install-deps
```

**Issue: Tests fail locally but pass in CI**
- Verify environment variables are set correctly
- Check BASE_URL and API_BASE_URL configuration
- Ensure database/API state is consistent

**Issue: Allure report generation fails**
```bash
# Verify Allure is installed
allure --version

# Clear previous results
rm -rf allure-results allure-report
npm test
npm run allure:generate
```

**Issue: Port already in use (report server)**
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Debug Mode

Run tests with verbose logging:

```bash
DEBUG=pw:api npm test
npx playwright test --debug
npx playwright test --headed --slowMo=1000
```

## Best Practices

### Test Writing
- ✅ Use meaningful test names
- ✅ Keep tests independent and isolated
- ✅ Follow AAA pattern (Arrange, Act, Assert)
- ✅ Use Page Object Model for UI tests
- ✅ Avoid hard-coded waits (use proper waits)

### Test Data
- ✅ Use Faker.js for dynamic data generation
- ✅ Clean up test data after execution
- ✅ Use test fixtures for setup/teardown
- ✅ Avoid shared state between tests

### Assertions
- ✅ Write clear, descriptive assertions
- ✅ Use soft assertions for non-critical checks
- ✅ Validate both positive and negative scenarios

### Performance
- ✅ Run tests in parallel when possible
- ✅ Use beforeAll/afterAll for setup/cleanup
- ✅ Optimize selectors for performance
- ✅ Monitor test execution time trends

### Maintenance
- ✅ Keep selectors stable (use data-testid when available)
- ✅ Document complex test logic
- ✅ Use consistent naming conventions
- ✅ Regular refactoring to reduce duplication

## Scripts Summary

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:ui` | Run UI tests only |
| `npm run test:api` | Run API tests only |
| `npm run smoke` | Run @smoke tagged tests |
| `npm run regression` | Run @regression tagged tests |
| `npm run report` | Open Playwright HTML report |
| `npm run allure:generate` | Generate Allure report |
| `npm run allure:report` | Generate and open Allure report |

## Support & Documentation

- **Playwright Docs:** https://playwright.dev
- **Allure Docs:** https://docs.qamind.com/allure/latest/
- **TypeScript Docs:** https://www.typescriptlang.org/docs/
- **Node.js Docs:** https://nodejs.org/docs/

## Version History

**v2.0.0** (Current)
- Allure Report integration
- Enhanced logging with Winston
- Schema validation
- Dynamic test data generation
- Full UI + API automation coverage

**v1.0.0**
- Initial framework setup
- Basic POM implementation
- Playwright integration

## License

This project is provided as-is for educational and testing purposes.

## Contributing

For improvements and bug fixes, please follow the established test patterns and maintain backward compatibility where possible.
