# Componentize Boilerplate
## A boilerplate for UI components development based on Storybook and Rollup
by [Gabriel Garnica](mailto:gabriel.garnica@gorillalogic.com)

This boilerplate is a starting point for component-based web development. It uses [Storybook](https://storybook.js.org/) to develop components in isolation with documentation, and [Rollup](https://rollupjs.org/) to bundle components and publish as NPM package for multiple projects usage.

Supports multiple UI components frameworks, including:

- [Mantine](https://mantine.dev/)
- [Ant Design](https://ant.design/)
- [Material UI (MUI)](https://material-ui.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Chakra UI (WIP, not ready yet)](https://chakra-ui.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone (repo url)
```

### 2. Install dependencies

```bash
npm install
```

### 3. Use the CLI setup script to prepare the boilerplate with the desired UI framework

```bash
npm run setup
```

### 4. Remove the unused boilerplate files through the CLI option (optional)

### 5. Start Storybook

```bash
npm run storybook
```
### 6. Upload the changes to your own repository changing the remote URL

```bash
git remote set-url origin (your repo url)
```

### 7. Develop your components in isolation, document them and publish them as NPM package


## Notes

- The boilerplate is based on the [Component Driven User Interfaces](https://www.componentdriven.org/) methodology.
- To learn more about Storybook and how to write stories, check the [official documentation](https://storybook.js.org/docs/react/get-started/introduction).
- To learn more about Rollup, check the [official documentation](https://rollupjs.org/guide/en/).
- To learn more about publishing NPM packages, check the [official documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).
- For more information contact [write me an email](mailto:gabriel.garnica@gorillalogic.com) or reach me via Slack.