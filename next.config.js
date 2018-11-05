// https://github.com/zeit/next-plugins/tree/master/packages/next-less
const withLess = require("@zeit/next-less");

// copy the robots.txt for prod only
const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

module.exports = withLess({
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    if (dev) {
      return defaultPathMap;
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, "robots.txt"), join(outDir, "robots.txt"));

    // return {
    //   "/": { page: "/" },
    //   "/about": { page: "/about" },
    //   "/readme.md": { page: "/readme" },
    //   "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
    //   "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
    //   "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } }
    // };
    return defaultPathMap;
  }
});
