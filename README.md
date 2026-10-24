# @x12i/thalux usage example

Typed SDK for mapping and transforming business data into the five Business Truth Planes.

This consuming application demonstrates **map a synthetic task into a business work item with provenance** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Transform business records into the five supported Business Truth Planes.
- Reuse typed metadata mappings across a consuming application's data transformations.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/thalux)
- [Implementation monorepo](https://github.com/x12i-saas/thalux)
- [Reviewed package source](https://github.com/x12i-saas/thalux/tree/0a178e7f1e5ed6dcb6669fbd4488b750dfa67d09/packages/thalux)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example consumes bundled assets or deterministic local fixtures. It does not contact providers, acquire real records, seed a database, or persist a production graph. Report examples check HTML generation only. Theme examples generate `preview.html`; visual appearance still needs browser review.
