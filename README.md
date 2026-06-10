# color

Curated color palettes for sketches and creative tools.

## Palette library

Main palette source:

- `palettes/sketch-palettes.json`

Each palette is a small, manageable set:

- `paper`: background color
- `ink`: default line/stroke color
- `fills`: normally `5-10` colors
- `family`: grouping such as `custom`, `riso`, `pantone-inspired`

Example:

```json
{
  "id": "gallery-soft",
  "name": "Gallery Soft",
  "family": "custom",
  "paper": "#f2efe8",
  "ink": "#222222",
  "fills": ["#7b9acc", "#c9a66b", "#8dc7b5", "#d77a61", "#9d79bc"],
  "tags": ["soft", "gallery"]
}
```

## Rules

- Keep palettes small and curated
- Prefer `5-10` fill colors
- Do not add entire Pantone or Riso catalogs as one palette
- Add multiple named sets instead

## JS usage

```js
const { getPalettes, getPaletteFamilies } = require('@tkjelsrud/color');
```

## GitHub Pages workflow

GitHub Pages is read-only in practice for this repo setup. That means the hosted page can be used to:

- browse palettes
- copy the full palette library as JSON
- copy single hex values
- copy a palette's `fills` array
- copy or download full palette JSON drafts
- validate draft JSON while editing

The hosted page cannot save back to the repository by itself.

Recommended workflow:

1. Open the GitHub Pages site.
2. Load an existing palette into the draft editor, or start a new one.
3. Edit the JSON in the browser.
4. Copy or download the JSON draft.
5. Paste it into `palettes/sketch-palettes.json` in the repo and commit.
