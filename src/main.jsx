import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
);
