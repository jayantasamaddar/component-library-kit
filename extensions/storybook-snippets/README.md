![Logo](assets/logo.png)

[![Version](https://vsmarketplacebadge.apphb.com/version/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/version-short/dsznajder.es7-react-js-snippets.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/installs-short/dsznajder.es7-react-js-snippets.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/dsznajder.es7-react-js-snippets.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)

# Introduction

This snippet library includes Storybook snippets for quickly scaffolding Stories using CSF 2.0 or CSF 3.0 and Testing Stories with Jest and Testing Library (for all supported frameworks) / React Test Renderer (for React snapshot testing).

Currently supports **JavaScript** and **TypeScript** for both **React** and **Vue 3** projects.

---

## Features

Storybook Snippets are available in the following languages:

- `javascript`,
- `javascriptreact`,
- `typescript`,
- `typescriptreact`,

for the following frameworks,

- **React**
- **Vue 3**,

in both **CSF 2.0** and [CSF Format 3.0](https://storybook.js.org/blog/component-story-format-3-0/) flavours. The snippets are automatically generated with the same commands given below, depending on whether a file has a `.js | .jsx` extension or `.ts | .tsx` extension.

Apart from this, to enable running tests in **Jest** using **Testing Library (Vue and React)** / **React Test Renderer** and Storybook stories with the Frameworks mentioned above, snippets for the same are also available.

---

## Project Setup

- Setup a **React** or a **Vue 3** project using any of the build tools / frameworks available, like Create React App or Next.js or just a plain vanilla install.
- Install **[Storybook.js](https://storybook.js.org)**.
- Recommended Folder structure and Naming convention, below.

  ```s
  ├── components
  │   ├── Checkbox
  │   │   ├── Checkbox.story.tsx  # Can be in the format: /*.(?:story|stories).(?:js|jsx|ts|tsx)$/
  │   │   ├── Checkbox.test.tsx
  │   │   ├── Checkbox.tsx
  │   │   └── index.ts
  │   ├── Icon
  │   │   ├── Icon.story.tsx    # Can be in the format: /*.(?:story|stories).(?:js|jsx|ts|tsx)$/
  │   │   ├── Icon.test.tsx
  │   │   ├── Icon.tsx
  │   │   └── index.ts
  │   └── ThemeProvider
  │       ├── index.ts
  │       └── ThemeProvider.tsx
  ```

  This will ensure the snippet generates accurate story setups. If this does not work for you, you can always generate the story file contents using the snippet and then change all the names in a single go.

  > **Note:** The story files can either be named `/*.(?:story|stories).(?:js|jsx|ts|tsx)$/`.

- The snippet generated will have changeable names highlighted that you can change at a single go. You can immediately begin typing the changes and then press `Tab` to confirm them and start writing the default story.

- Using the shortcuts given below in a **`.js` | `.jsx` | `.ts` | `.tsx`** file will generate different snippets.

---

## Story Snippets

### CSF 2.0 - Syntax

```s
# Syntax for CSF 2.0

[ sb ][ r | v ][ st ]
```

**Where**,

- **`sb`** - Short for Storybook and is the entrypoint for all snippet commands.
- **`r` | `v`** - A Storybook compatible frontend framework:

  - **`r`** - React
  - **`v`** - Vue

- **`st`** - Add a Single Story.

--

### CSF 2.0 - Commands

| Shortcut    | Function                                       |
| ----------- | ---------------------------------------------- |
| **`sbr`**   | CSF 2.0 - Scaffold a Basic Story Setup (React) |
| **`sbrst`** | CSF 2.0 - Add a single Story (React)           |
| **`sbv`**   | CSF 2.0 - Scaffold a Basic Story Setup (Vue 3) |
| **`sbvst`** | CSF 2.0 - Add a single Story (Vue 3)           |

---

### CSF 3.0 - Syntax

```s
# Syntax for CSF 3.0

[ sb ][ r | v ][ 3 ][ r ]
```

**Where**,

- **`sb`** - Short for Storybook and is the entrypoint for all snippet commands.
- **`r` | `v`** - A Storybook compatible frontend framework:

  - **`r`** - React
  - **`v`** - Vue

- **`3`** - CSF Format 3.0, if you want to use [CSF Format 3.0](https://storybook.js.org/blog/component-story-format-3-0/)
- **`st`** - (Optional) Add a Single Story without imports and the default function. If not provided, scaffolds the whole Story Setup.
- **`r`** - Whether you want to include a Render function (**`r`**).

---

### CSF 3.0 - Commands

| Shortcut      | Function                                                        |
| ------------- | --------------------------------------------------------------- |
| **`sbr3`**    | CSF 3.0 - Scaffold a Basic Story Setup (React)                  |
| **`sbr3r`**   | CSF 3.0 - Scaffold a Story Setup with Render in CSF 3.0 (React) |
| **`sbr3st`**  | CSF 3.0 - Add a single Story (React)                            |
| **`sbr3str`** | CSF 3.0 - Add a single Story with Render function for React     |

> **Note:** Vue 3 is not fully stable yet with CSF 3.0, hence the snippet is not yet added. It will be added in a future release.

---

## Testing Snippets

The testing snippets are to be used on a `*.test.(?:js|ts|jsx|tsx)` file.

### Syntax

```s
# Syntax for CSF 2.0

[ sb ][ r | v ][ it | test ][ snap ][ b ]
```

**Where**,

- **`sb`** - Short for Storybook and is the entrypoint for all snippet commands.
- **`r` | `v`** - A Storybook compatible frontend framework:

  - **`r`** - React
  - **`v`** - Vue

- **`it | test`** - Whether you want a `describe-it` or a `describe-test` style testing block.
- **`snap`** - (Optional) Whether it is a snapshot testing block.
- **`b`** - (Optional) Whether this is a single test block. If not provided, imports are included.

---

### Commands (React)

| Shortcut           | Function                                                      |
| ------------------ | ------------------------------------------------------------- |
| **`sbrit`**        | Scaffold a React Test (describe-it syntax)                    |
| **`sbrtest`**      | Scaffold a React Test (describe-test syntax)                  |
| **`sbritsnap`**    | Scaffold a React Snapshot Test (describe-it syntax)           |
| **`sbrtestsnap`**  | Scaffold a React Test (describe-test syntax)                  |
| **`sbritsnapb`**   | Add a Single React Snapshot Test Block (describe-it syntax)   |
| **`sbrtestsnapb`** | Add a Single React Snapshot Test Block (describe-test syntax) |

### Commands (Vue)

| Shortcut           | Function                                                    |
| ------------------ | ----------------------------------------------------------- |
| **`sbvit`**        | Scaffold a Vue Test (describe-it syntax)                    |
| **`sbvtest`**      | Scaffold a Vue Test (describe-test syntax)                  |
| **`sbvitsnap`**    | Scaffold a Vue Snapshot Test (describe-it syntax)           |
| **`sbvtestsnap`**  | Scaffold a Vue Test (describe-test syntax)                  |
| **`sbvitsnapb`**   | Add a Single Vue Snapshot Test Block (describe-it syntax)   |
| **`sbvtestsnapb`** | Add a Single Vue Snapshot Test Block (describe-test syntax) |

---

# Additional Tips

- The `Tab` key is your friend. Hit `Tab` to cycle through options to edit the injected content.
- The `Esc` key escapes the content edit mode. This is useful, as if you reach the end of the edit and want to inject a new Story or a new Test, you may want to leave the editing mode.

---

# Release Notes

Visit the [Changelog](/extensions/storybook-snippets/CHANGELOG.md).
