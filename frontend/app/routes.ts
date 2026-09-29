import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  route("/", "./layouts/navbar-layout.jsx", [
    index("pages/HomePage.jsx"),
    route("history", "pages/HistoryPage.jsx"),
    route("settings", "pages/SettingsPage.jsx"),
  ]),
] satisfies RouteConfig;
