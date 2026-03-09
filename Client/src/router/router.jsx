import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

import Home from "../MainPages/Home";
import S12 from "../MainPages/S12";
import Calendar from "../S12/Calendar/index";
import Wad from "../S12/Wad/index";
import Opde from "../S12/Opde/index";
import Discrete from "../S12/Discrete/index";
import Oop from "../S12/Oop/index";
import Eee from "../S12/Eee/index";
import Ed from "../S12/Ed/index";
import Bs from "../S12/Bs/index";
import EeeLab from "../S12/Eee/EeeLab/EeeLab";
import OopMid from "../S12/Oop/OopMid";
import JavaCodes from "../S12/Oop/JavaCodes";
import BsTimeLine from "../S12/Bs/BsHistory/BsTimeLine";
import HtmlCodes from "../S12/Wad/HtmlCodes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/S12", element: <S12 />, errorElement: <ErrorPage /> },
  { path: "/S12/Calendar", element: <Calendar />, errorElement: <ErrorPage /> },
  { path: "/S12/Discrete", element: <Discrete />, errorElement: <ErrorPage /> },
  { path: "/S12/Wad", element: <Wad />, errorElement: <ErrorPage /> },
  { path: "/S12/Wad/HtmlCodes", element: <HtmlCodes />, errorElement: <ErrorPage /> },
  { path: "/S12/Oop", element: <Oop />, errorElement: <ErrorPage /> },
  { path: "/S12/Oop/JavaCodes", element: <JavaCodes />, errorElement: <ErrorPage /> },
  { path: "/S12/Oop/OopMid", element: <OopMid />, errorElement: <ErrorPage /> },
  { path: "/S12/Opde", element: <Opde />, errorElement: <ErrorPage /> },
  { path: "/S12/Eee", element: <Eee />, errorElement: <ErrorPage /> },
  { path: "/S12/Eee/EeeLab", element: <EeeLab />, errorElement: <ErrorPage /> },
  { path: "/S12/Ed", element: <Ed />, errorElement: <ErrorPage /> },
  { path: "/S12/Bs", element: <Bs />, errorElement: <ErrorPage /> },
  { path: "/S12/Bs/BsHistory/BsTimeLine", element: <BsTimeLine />, errorElement: <ErrorPage /> },
  { path: "*", element: <ErrorPage /> },
]);

export default router;