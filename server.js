/* eslint-disable no-console */
const express = require("express");
const next = require("next");
const map = require("./lib/routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get(map.sites.route + "/:category/:site", (req, res) => {
      const actualPage = map.sites.page;
      const queryParams = {
        category: req.params.category,
        site: req.params.site
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get(map.sites.route + "/:category", (req, res) => {
      const actualPage = map.sites.page;
      const queryParams = {
        category: req.params.category
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) {
        throw err;
      }
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
