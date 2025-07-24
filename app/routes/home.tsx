import type { Route } from "./+types/home";
import { Starting } from "../welcome/starting";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Starting />;
}
