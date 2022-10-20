# Changelog

All notable changes to the **Storybook Snippets** extension will be documented in this file.

## Unreleased

- Vue 2 support
- MDX support

---

## 1.0.0 - 2021-10-20

- Launched: Initial release of Storybook Snippets

  - **React**, **Vue 3** stories in Storybook CSF 2.0 and CSF 3.0 (JavaScript and TypeScript)

    - Syntax for CSF 2.0 - `[ sb ][ r | v ][ st ]` - Supported for React and Vue 3.
    - Syntax for CSF 3.0 - `[ sb ][ r | v ][ 3 ][ r ]` - Supported for React.

  - Jest-Storybook snippets with **`@testing-library/react`**, **`@storybook/testing-react`** and **`react-test-renderer`** for **React** (`describe-it`, `describe-test`).

  - Jest-Storybook snippets with **`@testing-library/vue`** and **`@storybook/testing-vue`** for **Vue** (`describe-it`, `describe-test`).

  - Snapshot Testing snippets for both **React** and **Vue**.
    - Syntax - `[ sb ][ r | v ][ it | test ][ snap ]`

---
