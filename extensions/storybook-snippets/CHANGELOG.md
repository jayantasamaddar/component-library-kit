# Changelog

All notable changes to the **Storybook Snippets** extension will be documented in this file.

## Unreleased

- Vue 2 support
- MDX support

---

## 1.0.3 - 2021-10-23

- **Bug Fix**
  - Jest Snippets - Snapshot tests to render a Component in React inside a closed tag, unlike Vue where it is mounted with just the component name.

## 1.0.2 - 2021-10-22

- **Bug Fix:**
  - Jest Snippets - React Snapshot testing `renderer.create`, mistakenly showing up as `renderer`.
- **Added:**
  - **New Story Template** (CSF 2.0): **`sbrtm`** (React) and **`sbvtm`** (Vue).
- **Updated:**
  - Code-splitting done to ensure javascript snippets do not show up in a `.ts` or `.tsx` file and vice versa.
  - [README](/README.md) updated with the new snippets.

## 1.0.1 - 2021-10-21

- **Bug Fix:**
  - Jest Storybook snippets
    - Fixed an issue with React and Vue snippets having identical prefixes.
    - Fixed issues with test blocks' Tabstops (`sbritb`, `sbrtestb`, `sbritsnapb` `sbrtestsnapb`, `sbvitb`, `sbvtestb`, `sbvitsnapb` `sbvtestsnapb`)
  - Removed non-functional keybindings for now. Will be added in an upcoming minor update.

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
