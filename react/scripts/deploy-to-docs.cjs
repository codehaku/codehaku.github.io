const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");
const docsDir = path.join(rootDir, "..", "docs");

if (!fs.existsSync(buildDir)) {
  console.error("Build directory does not exist. Run `npm run build` first.");
  process.exit(1);
}

fs.rmSync(docsDir, { recursive: true, force: true });

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(buildDir, docsDir);
// Prevent GitHub Pages from running Jekyll on the React build
const noJekyllPath = path.join(docsDir, ".nojekyll");
if (!fs.existsSync(noJekyllPath)) {
  fs.writeFileSync(noJekyllPath, "");
}

console.log("React build copied to ../docs (with .nojekyll)");

