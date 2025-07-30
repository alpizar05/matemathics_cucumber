# Mathematics Cucumber Test Automation

A test automation solution using Node.js and Cucumber.js.

## Features

This project demonstrates basic mathematics operations using cucumber scenarios:

- **Cucumber eating**: Basic subtraction scenarios
- **Carrot eating**: Subtraction with error handling
- **Salad making**: Multi-ingredient operations

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Setup Instructions

1. **Clone the repository** (if not already done):
   ```
   clone github repository https://github.com/alpizar05/mathematics_cucumber.git
   ```

2. **Install dependencies**:
   ```bash
   cd mathematics_cucumber
   npm install
   ```

3. **Run the tests**:
   ```bash
   npm test
   ```

4. **Open Report**:
   ```bash
   npm run allure:serve
   ```

5. **Clean Report**:
   ```bash
   npm run clean
   ```

## Project Structure

```
matemathics_cucumber/
├── features/
│   └── mathematics.feature          # Gherkin feature file with scenarios
├── page_objects/                    # Page object classes
│   ├── salad.js                    # Salad management class
│   └── vegetable.js                # Vegetable management class
├── step_definitions/               # Step definitions
│   └── mathematics_steps.js        # Step definitions implementation
├── allure-results/                  # Allure test results (generated)
├── allure-report/                   # Allure HTML reports (generated)
├── cucumber.js                      # Cucumber configuration
├── package.json                     # Node.js project configuration
├── .gitignore                       # Git ignore rules
├── LICENSE                          # MIT License file
└── README.md                        # This file
```

## Available Commands

### Running Tests
- `npm test` - Run all Cucumber tests with default configuration
- `npm run test:verbose` - Run tests with pretty formatter

### Running Tests by Tags
- `npm run test:cucumber` - Run only cucumber-related scenarios (`@cucumber`)
- `npm run test:carrot` - Run only carrot-related scenarios (`@carrot`)
- `npm run test:salad` - Run only salad-related scenarios (`@salad`)
- `npm run test:regression` - Run all regression tests (`@regression`)
- `npm run test:smoke` - Run only smoke tests (`@smoke`)
- `npm run test:edge-case` - Run edge case scenarios (`@edge-case`)

### Allure Reports
- `npm run test:allure` - Run all tests and generate Allure report
- `npm run allure:serve` - Run tests and serve Allure report in browser (auto-opens)
- `npm run allure:generate` - Generate static Allure report
- `npm run allure:open` - Open existing Allure report in browser

### Cleaning Commands
- `npm run clean` - Clean all reports and results
- `npm run allure:clean` - Clean Allure results and reports
- `npm run allure:clean-results` - Clean only Allure results
- `npm run allure:clean-report` - Clean only Allure report

## Test Tags

This project uses Cucumber tags to organize and categorize test scenarios. Tags allow you to run specific subsets of tests based on their characteristics.

### Available Tags

| Tag | Description | Usage |
|-----|-------------|-------|
| `@regression` | Comprehensive tests that should run in CI/CD pipelines | All scenarios except basic examples |
| `@smoke` | Quick validation tests for basic functionality | Core happy path scenarios |
| `@cucumber` | Tests specifically for cucumber eating operations | Cucumber-related scenarios |
| `@carrot` | Tests specifically for carrot eating operations | Carrot-related scenarios |
| `@salad` | Tests for salad making operations | Salad creation scenarios |
| `@edge-case` | Tests for error conditions and boundary cases | Negative scenarios and error handling |

### Tag Combinations

Scenarios can have multiple tags to support different test execution strategies:

- **Smoke + Feature**: `@smoke @cucumber` - Quick cucumber validation
- **Regression + Edge Case**: `@regression @edge-case` - Comprehensive error testing
- **Feature Specific**: `@carrot @edge-case` - Carrot error scenarios

### Running Tests with Custom Tags

You can also run tests with custom tag combinations using Cucumber's tag expressions:

```bash
# Run only smoke tests
npx cucumber-js --tags @smoke

# Run regression tests but exclude edge cases
npx cucumber-js --tags "@regression and not @edge-case"

# Run either cucumber or carrot tests
npx cucumber-js --tags "@cucumber or @carrot"

# Run salad tests that are also regression tests
npx cucumber-js --tags "@salad and @regression"
```

## Viewing Test Reports

### Allure Reports
1. **Quick view**: Run `npm run allure:serve` - this will automatically open the report based in allure-results in your browser without generating allure-report files
2. **Generate static report**: 
   - Run `npm run test:allure` to run tests and generate report files
   - Run `npm run allure:open` to view the generated report

Allure reports provide rich interactive dashboards with:
- Test execution trends
- Test case details with steps
- Error screenshots and logs
- Test execution statistics
- Historical data tracking
- Tag-based filtering and grouping

## Technology Stack

- **Node.js**: JavaScript runtime environment
- **Cucumber.js**: BDD test framework
- **Chai**: Assertion library for testing
- **Allure**: Advanced test reporting framework
- **Gherkin**: Language for writing feature files

## Test Strategy

### Test Pyramid Implementation

1. **Smoke Tests** (`@smoke`): Fast, critical path validation
   - Basic cucumber eating
   - Basic carrot eating  
   - Simple salad making

2. **Regression Tests** (`@regression`): Comprehensive feature coverage
   - All functional scenarios
   - Both happy path and edge cases

3. **Edge Case Tests** (`@edge-case`): Error condition validation
   - Insufficient ingredient scenarios
   - Boundary condition testing

## License

This project is licensed under the MIT License - see the LICENSE file for details.