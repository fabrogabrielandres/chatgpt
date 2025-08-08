import { RouterProvider } from "react-router";
import { router } from "./presentation/router/router";

export default function App() {
  return <RouterProvider router={router} />;
}
