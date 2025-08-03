import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { redirect } from "react-router";

export default [
  index("routes/home.tsx"),
  route("*", "routes/redirect-to-home.tsx"),
] satisfies RouteConfig;
