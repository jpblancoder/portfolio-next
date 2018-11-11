const projects = require("./lib/projects");
const groupBy = require("lodash/groupBy");

const withLess = require("@zeit/next-less");

// copy the robots.txt for prod only
const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

// module.exports = withSass({
module.exports = withLess({
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    if (dev) {
      return defaultPathMap;
    }
    // This will copy files from your project root into the out directory
    await copyFile(join(dir, "robots.txt"), join(outDir, "robots.txt"));
    await copyFile(join(dir, "/static/favicons/favicon.ico"), join(outDir, "favicon.ico"));

    // primary static pages
    let routes = {
      "/": { page: "/" },
      "/sites": { page: "/portfolio" }
    };

    // dynamic portfolio category pages
    const groups = groupBy(projects, "category");
    Object.keys(groups).forEach(category => {
      routes[`/sites/${category}`] = {
        page: "/portfolio",
        query: {
          category: category
        }
      };
    });

    // dynamic portfolio site pages
    projects.forEach(p => {
      routes[`/sites/${p.category}/${p.project}`] = {
        page: "/portfolio",
        query: {
          category: p.category,
          site: p.project
        }
      };
    });

    return routes;
  }
});
