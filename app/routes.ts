import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./pages/Layout.jsx", [
    index("./pages/Home.jsx"),
    route("/about", "./pages/About.jsx"),
    route("/login", "./pages/Login.jsx"),
    route("/signup", "./pages/SignUp.jsx"),
  ]),
] satisfies RouteConfig;
