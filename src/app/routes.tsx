import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { HomePage } from "../pages/home";
import { EditaisPage } from "../pages/editais";
import { WizardContainer } from "../pages/processo-seletivo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "editais", Component: EditaisPage },
      { path: "processo-seletivo", Component: WizardContainer },
    ],
  },
]);
