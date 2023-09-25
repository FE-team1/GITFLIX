import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import DetailPage from "../pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/detail", element: <DetailPage /> },
]);
export default router;
