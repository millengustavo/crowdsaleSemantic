const routes = require("next-routes")();

routes.add("/services/:address", "/services/show");

module.exports = routes;
