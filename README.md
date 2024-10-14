# Example Inc. Application Foundation

Welcome to the **Application Foundation** for Example Inc.! This project serves as a robust starting point for building scalable and maintainable applications. It establishes core patterns for routing, navigation, data access, editing, validation, testing, and more. Our goal is to enable new engineers to focus on implementing new features without reinventing the wheel for common needs.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Overview](#project-overview)
  - [Purpose](#purpose)
  - [Tech Stack](#tech-stack)
  - [Features Implemented](#features-implemented)
- [Detailed Explanation](#detailed-explanation)
  - [Project Structure](#project-structure)
  - [Reusable Components](#reusable-components)
  - [State Management](#state-management)
  - [TypeScript Usage](#typescript-usage)
  - [Coding Best Practices](#coding-best-practices)
    - [Consistent Naming Conventions](#consistent-naming-conventions)
    - [Single Responsibility Principle](#single-responsibility-principle)
    - [Modular Stores](#modular-stores)
    - [Typed Props and Emits](#typed-props-and-emits)
    - [Conventional Commits](#conventional-commits)
    - [Linting with ESLint](#linting-with-eslint)
    - [Formatting with Prettier](#formatting-with-prettier)
    - [Integrate Linting and Formatting in IDE](#integrate-linting-and-formatting-in-ide)
  - [Dark Mode and Provide/Inject](#dark-mode-and-provideinject)
  - [Unit Testing](#unit-testing)
- [Next Iterations](#next-iterations)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js (version 20 or above) installed. Use NVM for installation ([Node.js on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)) https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
- **NPM or Yarn**: Package manager for installing dependencies.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/lokanathchandrareddy/exampleinc-core.git
   cd exampleinc-core
   ```

2. **Install Dependencies**
   Make sure Node v20 is installed. If not, please refer to the document.

   ```bash
   # Using npm
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Project Overview

### Purpose

The purpose of this project is to provide a solid foundation for building scalable applications at Example Inc. It demonstrates best practices in project organization, state management, component reuse, and testing. By using this template, new developers can quickly get up to speed and start contributing effectively.

### Tech Stack

- **Nuxt 3**: Server-side rendering and powerful features for Vue.js applications.
- **Vue.js 3**: Progressive JavaScript framework for building user interfaces with Composition API.
- **Vuetify 3**: Material Design component framework for Vue.js.
- **Pinia**: Intuitive state management library for Vue.js.
- **TypeScript**: Typed superset of JavaScript for improved code quality.
- **Vite**: Fast build tool for modern web projects.
- **Vitest**: A blazing-fast unit testing framework.
- **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
- **Prettier**: An opinionated code formatter.

### Features Implemented

- **User Management**: Load, display, edit, and update user data from an API.
- **Routing and Navigation**: Demonstrates routing with a navigation bar at the top.
- **Reusable Components**: Includes reusable components like `LogoComponent` and `CompanyDataTable`.
- **Dark Mode Support**: Users can toggle between light and dark themes.
- **State Management**: Uses Pinia for scalable state management across the application.
- **Provide/Inject Example**: Implements global functions using the provide/inject pattern.
- **Coding Best Practices**: Sets up ESLint rules and follows Conventional Commits for commit messages.
- **Unit Testing**: Includes unit tests for components and stores (more to be added).

---

## Detailed Explanation

### Project Structure

Here's an overview of the project's structure:

```bash
exampleinc-core/
├── components/                   # Reusable Vue components
│   ├── company-data-table.vue    # Customizable data table component
│   ├── logo-component.vue        # Application logo component
│   ├── nav-bar.vue               # Top navigation bar with routing
│   ├── user-details-dialog.vue   # Dialog to display user details
│   └── __tests__/                # Unit tests for components
│       └── logo-component.spec.ts# Tests for LogoComponent
├── layouts/
│   └── default.vue               # Default layout with header and footer
├── pages/                        # Nuxt pages for routing
│   ├── index.vue                 # Landing page with application overview
│   └── users/
│       ├── index.vue             # Users list page
│       └── [id].vue              # User edit page
├── plugins/
│   └── vuetify.ts                # Vuetify configuration and theme setup
├── stores/
│   ├── userStore.ts              # Pinia store for managing user data
│   └── __tests__/                # Unit tests for stores
│       └── userStore.spec.ts     # Tests for userStore
├── types/
│   └── User.ts                   # TypeScript interfaces and types
├── .eslintrc.js                  # ESLint configuration
├── nuxt.config.ts                # Nuxt configuration file
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation (this file)
```

- **components/**: Contains reusable Vue components that can be used across the application.
- **layouts/**: Defines the layouts used by Nuxt pages, such as the default layout with a header and footer.
- **pages/**: Contains the application's pages, which Nuxt uses to generate routes.
- **plugins/**: Holds Nuxt plugins like the Vuetify configuration.
- **stores/**: Contains Pinia stores for state management.
- **tests/**: Includes unit tests for components and stores using Vitest.
- **types/**: Defines TypeScript interfaces and types for consistent data structures.
- **.eslintrc.js**: ESLint configuration for code linting.
- **nuxt.config.ts**: Configuration file for Nuxt.js.

### Reusable Components

#### `LogoComponent.vue`

- **Description**: A simple, customizable logo component that displays the company logo.
- **Features**:
  - Accepts props for different logo variations.
  - Can be used in headers, footers, or anywhere a logo is needed.

#### `CompanyDataTable.vue`

- **Description**: A highly customizable data table component.
- **Features**:
  - Supports sorting and searching.
  - Customizable headers and rows.
  - Action icons with tooltips for editing, deleting, and viewing details.
  - Designed for reusability across different data sets.

#### `NavBar.vue`

- **Description**: The top navigation bar that handles routing and theme toggling.
- **Features**:
  - Includes links to different sections of the application.
  - Provides a toggle for switching between light and dark modes.

#### `UserDetailsDialog.vue`

- **Description**: A dialog component to display detailed information about a user in read-only format.
- **Features**:
  - Utilizes Vuetify's dialog and card components.
  - Demonstrates separation of concerns by handling user details in a dedicated component.
  - Showcases passing data via props and event emission for closing the dialog.

---

### State Management

The application uses **Pinia** for state management.

#### `userStore.ts`

- **Description**: Manages user data including fetching, updating, and deleting users.
- **Features**:
  - Actions for asynchronous API calls.
  - Mutations for updating the state.
  - State variables for storing user data and status flags.
- **Why Pinia?**
  - Provides a simple and intuitive API.
  - Supports TypeScript out of the box.
  - Encourages modular store design.

---

### TypeScript Usage

TypeScript enhances code reliability and developer experience.

- **Type Definitions**:
  - Located in `types/`, e.g., `User.ts` defines the `User` interface.
- **Component Props and Emits**:
  - Typed to prevent runtime errors and improve code documentation.
- **Store Typings**:
  - Pinia stores are strongly typed, allowing for safe state mutations and actions.

### Coding Best Practices

Adhering to coding best practices ensures that the codebase remains clean, maintainable, and scalable.

#### Consistent Naming Conventions

**Use PascalCase for Components in template**

- **Why?** Enhances readability and distinguishes components from regular HTML elements.
- **Example**:

  ```vue
  <template>
    <CompanyDataTable />
  </template>
  ```

**Use kebab-case or PascalCase for File Names**

- **Why?** Ensures consistency across different operating systems and improves file organization.
- **Example**:

  ```
  components/
  ├── CompanyDataTable.vue
  ├── logo-component.vue
  ```

##### More can be found in this [Vue best practices](https://learnvue.co/articles/vue-best-practices)
---

#### Single Responsibility Principle

- **Why?** Each component should have one clear purpose, making it easier to manage, test, and reuse.
- **Good Example**:

  - `NavBar.vue`: Handles navigation and theme toggling.
  - `UserDetailsDialog.vue`: Displays user details in a dialog.

- **Bad Example**:

  - A `HeaderFooterComponent.vue` that handles header and footer details all in one.

---

#### Modular Stores

- **Why?** Keeps state management organized and maintainable, especially as the application scales.
- **Example**:

  ```
  stores/
  ├── userStore.ts       # Manages user-related state
  ├── productStore.ts    # Manages product-related state
  └── cartStore.ts       # Manages shopping cart state
  ```

---

#### Typed Props and Emits

- **Why?** Enhances component reliability and provides better developer experience with auto-completion and type checking.
- **Example**:

  ```ts
  // In your component
  const props = defineProps<{
    userId: number;
    userName: string;
  }>();

  const emit = defineEmits<{
    (e: 'update', payload: User): void;
  }>();
  ```

---

#### Conventional Commits

- **Why?** Provides a clear and structured commit history, facilitating easier navigation and automation (e.g., generating changelogs).
- **Specification**: [Conventional Commits](https://www.conventionalcommits.org/)
- **Example Commit Messages**:

  - `feat(users): add user detail view dialog`
  - `fix(navbar): correct theme toggle issue`

---

#### Linting with ESLint

- **Why?** Ensures code consistency and catches potential errors early in the development process.
- **Setup Includes**:
  - **Airbnb Style Guide**: As the base linting rules.
  - **TypeScript ESLint Plugin**: For TypeScript support.
  - **Prettier Integration**: To prevent conflicts between ESLint and Prettier.
- **Usage**:

  ```bash
  npm run lint          # Lint all files
  npm run lint:fix      # Lint and automatically fix issues
  ```

---

#### Formatting with Prettier

- **Why?** Automates code formatting, reducing discrepancies and improving readability.
- **Configuration**:
  - `.prettierrc` file at the root of the project.
- **Integration with ESLint**:
  - Use `eslint-config-prettier` to disable ESLint rules that might conflict with Prettier.

---

#### Integrate Linting and Formatting in IDE

- **Why?** Provides real-time feedback and enforces standards as you code, increasing productivity.
- **Recommendations**:
  - **VSCode Extensions**:
    - ESLint
    - Prettier - Code formatter
  - **Settings**:
    - Enable format on save.
    - Configure ESLint to auto-fix on save.

---

### Dark Mode and Provide/Inject

The application supports **Dark Mode**, toggled from the navigation bar.

- **Why?**
  - Enhances user experience, especially in low-light environments.
  - Provides a modern look and feel.
- **Implementation**:
  - Utilizes Vuetify's theming capabilities.
  - The theme state is managed globally using the provide/inject pattern.

#### Provide/Inject Pattern

- **Usage**:
  - **Provide**: In `default.vue`, we provide the `showSnackbar` function.
  - **Inject**: In any component, we can inject `showSnackbar` to display notifications.
- **Why?**
  - Avoids prop drilling for global functions or state.
  - Promotes cleaner and more maintainable code.

---

### Unit Testing

Unit tests are written using **Vitest** and are located in the `tests/` directory.

- **Components Tested**:
  - `CompanyDataTable.vue`
  - `UserDetailsDialog.vue`
- **Stores Tested**:
  - `userStore.ts`
- **How to Run Tests**:

  ```bash
  npx vitest
  npx vitest --watch #
  ```

- **Why Unit Testing?**
  - Ensures individual units of code function as expected.
  - Catches bugs early in the development cycle.
  - Provides documentation on how components and stores are expected to behave.

*Note: More tests will be added in the coming days to improve coverage and reliability.*

---

## Next Iterations

In the upcoming iterations, we plan to enhance the application with the following features:
- **Fix Bugs**: Debug and update Darkmode colors for better UI and fix sorting in the table
- **Pagination Implementation**: Add pagination to `CompanyDataTable.vue` with server-side data loading to efficiently handle larger datasets.
- **Form Validation**: Implement robust form validation using VeeValidate or a similar library to ensure data integrity.
- **Comprehensive Unit Testing**: Expand unit test coverage for all components and stores to improve code reliability.
- **Internationalization (i18n)**: Introduce support for multiple languages to make the application accessible to a wider audience.
- **Utilize Composables**: Refactor code to use Vue 3 composables for better code reuse and organization.
- **Examples Directory**: Include a directory with full working examples to assist developers in understanding usage patterns.
- **Enhanced Server/API Integration**: Utilize Nuxt's server REST API structure to streamline real API calls.
- **Improved Data Querying**: Integrate TanStack Query for better data fetching, caching, and updating strategies.
- **Sidebar Navigation**: Move navigation to a sidebar to enhance scalability and improve user experience.
- **Branding Guidelines**: Define and document company branding to ensure consistency across the application.
- **User Authentication**: Integrate user authentication and authorization mechanisms for secure access control.
- **Error Handling Enhancements**: Add comprehensive error handling, including alert dialogs and user-friendly error messages using error boundaries.
- **Accessibility (a11y) Improvements**: Enhance accessibility compliance across the application to meet industry standards.
- **Performance Optimization**: Optimize performance through code splitting, lazy loading, and other best practices.
- **Advanced Theming**: Allow dynamic theme customization to support better branding and user preferences.
- **State Persistence**: Implement state persistence across sessions using local storage or other storage mechanisms.
- **API Error Mocking**: Use tools like MSW (Mock Service Worker) to simulate API errors in tests for more robust testing.
- **Component Documentation**: Generate documentation for reusable components to aid developer onboarding and usage.
- **Continuous Integration/Deployment (CI/CD)**: Set up CI/CD pipelines using tools like GitHub Actions for automated testing and deployment.
- **End-to-End (E2E) Testing**: Add E2E tests using Cypress or Playwright to ensure application functionality from a user's perspective.
- **Real-Time Data Updates**: Implement real-time data updates using WebSockets or Server-Sent Events (SSE) for dynamic content.

---

## Contributing

We welcome contributions from the team to improve this foundation. Please follow these guidelines:

- **Branch Naming**: Use descriptive names like `feature/user-auth` or `bugfix/navbar-layout` or `feature/server-api` or `task/addDocument`.
- **Commit Messages**: Follow the [Conventional Commits](#conventional-commits) specification.
- **Pull Requests**: Submit PRs for review before merging to the main branch.
- **Code Style**: Ensure your code passes ESLint checks and is formatted with Prettier.
- **Testing**: Write unit tests for new features or components.
- **Documentation**: Update the README or other documentation if your changes affect them.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or suggestions, please reach out to the project maintainer at [developerX@exampleinc.com](mailto:xyz@xyz.com).

---

*By reading this README, you should be equipped to get started quickly and be excited about contributing to our robust and scalable application foundation at Example Inc.!*

---