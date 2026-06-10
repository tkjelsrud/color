const paletteData = require('./palettes/sketch-palettes.json');

function normalizePalette(entry) {
  return {
    id: entry.id,
    name: entry.name,
    family: entry.family || 'custom',
    background: entry.paper || entry.background || '#ffffff',
    ink: entry.ink || '#000000',
    fills: Array.isArray(entry.fills) ? entry.fills.slice() : [],
    tags: Array.isArray(entry.tags) ? entry.tags.slice() : [],
  };
}

function getPalettes() {
  return (paletteData.palettes || []).map(normalizePalette);
}

function getPaletteFamilies() {
  return Array.from(new Set(getPalettes().map((palette) => palette.family)));
}

module.exports = {
  getPalettes,
  getPaletteFamilies,
};
