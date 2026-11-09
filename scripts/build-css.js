const fs = require('fs');
const path = require('path');
const loader = require('@tailwindcss/turbopack');

const inputPath = path.resolve(__dirname, '../src/app/tailwind-input.css');
const outputPath = path.resolve(__dirname, '../src/app/tailwind-built.css');
const inputCss = fs.readFileSync(inputPath, 'utf8');

const mockContext = {
  async: () => (err, result) => {
    if (err) {
      console.error('Tailwind build error:', err);
      process.exit(1);
    }
    fs.writeFileSync(outputPath, result);
    console.log(`✓ Tailwind CSS generated successfully (${result.length} bytes)`);
  },
  getOptions: () => ({ base: path.resolve(__dirname, '..'), optimize: false }),
  resourcePath: inputPath,
  resource: inputPath,
  addDependency: () => {},
  addContextDependency: () => {}
};

loader.call(mockContext, inputCss);
