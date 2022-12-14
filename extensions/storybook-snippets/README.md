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

for use with the following frontend frameworks,

- **React**
- **Vue 3**

in both **CSF 2.0** and [CSF Format 3.0](https://storybook.js.org/blog/component-story-format-3-0/) flavours. The snippets are automatically generated with the same commands given below, depending on whether a file has a `.js | .jsx` extension or `.ts | .tsx` extension.

Apart from this, to enable running tests in **Jest** using **Testing Library (Vue and React)** / **React Test Renderer** and Storybook stories with the Frameworks mentioned above, snippets for the same are also available.

---

## Project Setup

- Launch VS Code Quick Open (Ctrl+P), paste the following command below, and press enter.

  ```s
  ext install jayantasamaddar.clk-storybook-snippets
  ```

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

[ sb ][ r | v ][ st | tm ]
```

**Where**,

- **`sb`** - Short for Storybook and is the entrypoint for all snippet commands.
- **`r` | `v`** - A Storybook compatible frontend framework:

  - **`r`** - React
  - **`v`** - Vue

- **`st` | `tm`** - (Optional) Add either a Single Story (`st`) or a Single Template (`tm`). If not provided, scaffolds the entire setup.

--

### CSF 2.0 - Commands

| Shortcut    | Framework | Function                                            |
| ----------- | --------- | --------------------------------------------------- |
| **`sbr`**   | React     | CSF 2.0 - Scaffold a Basic Story Setup with imports |
| **`sbrtm`** | React     | CSF 2.0 - Add a single Template                     |
| **`sbrst`** | React     | CSF 2.0 - Add a single Story                        |
| **`sbv`**   | Vue 3     | CSF 2.0 - Scaffold a Basic Story Setup with imports |
| **`sbvtm`** | Vue 3     | CSF 2.0 - Add a single Template                     |
| **`sbvst`** | Vue 3     | CSF 2.0 - Add a single Story                        |

---

### CSF 3.0 - Syntax

```s
# Syntax for CSF 3.0

[ sb ][ r | v ][ 3 ][ st ][ r ]
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

| Shortcut      | Framework | Function                                                             |
| ------------- | --------- | -------------------------------------------------------------------- |
| **`sbr3`**    | React     | CSF 3.0 - Scaffold a Basic Story Setup with imports                  |
| **`sbr3r`**   | React     | CSF 3.0 - Scaffold a Story Setup with Render in CSF 3.0 with imports |
| **`sbr3st`**  | React     | CSF 3.0 - Add a single Story                                         |
| **`sbr3str`** | React     | CSF 3.0 - Add a single Story with Render function                    |

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

| Shortcut           | Framework | Function                                                     |
| ------------------ | --------- | ------------------------------------------------------------ |
| **`sbrit`**        | React     | Scaffold a Test (describe-it syntax) with imports            |
| **`sbrtest`**      | React     | Scaffold a Test (describe-test syntax) with imports          |
| **`sbritsnap`**    | React     | Scaffold a Snapshot Test (describe-it syntax) with imports   |
| **`sbrtestsnap`**  | React     | Scaffold a Snapshot Test (describe-test syntax) with imports |
| **`sbritsnapb`**   | React     | Add a Single Snapshot Test Block (describe-it syntax)        |
| **`sbrtestsnapb`** | React     | Add a Single Snapshot Test Block (describe-test syntax)      |

---

### Commands (Vue)

| Shortcut           | Framework | Function                                                     |
| ------------------ | --------- | ------------------------------------------------------------ |
| **`sbvit`**        | Vue       | Scaffold a Test (describe-it syntax) with imports            |
| **`sbvtest`**      | Vue       | Scaffold a Test (describe-test syntax) with imports          |
| **`sbvitsnap`**    | Vue       | Scaffold a Snapshot Test (describe-it syntax) with imports   |
| **`sbvtestsnap`**  | Vue       | Scaffold a Snapshot Test (describe-test syntax) with imports |
| **`sbvitsnapb`**   | Vue       | Add a Single Snapshot Test Block (describe-it syntax)        |
| **`sbvtestsnapb`** | Vue       | Add a Single Snapshot Test Block (describe-test syntax)      |

---

# Additional Tips

- The `Tab` key is your friend. Hit `Tab` to cycle through options to edit the injected content.
- The `Esc` key escapes the content edit mode. This is useful, as if you reach the end of the edit and want to inject a new Story or a new Test, you may want to leave the editing mode.

---

# Goal of this Project

To have a single extension for enabling frontend developers to rapidly develop frontend libraries, websites and application frontends.

---

# Release Notes

Visit the [Changelog](/extensions/storybook-snippets/CHANGELOG.md).
