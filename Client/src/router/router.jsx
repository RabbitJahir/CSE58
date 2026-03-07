import { createBrowserRouter } from "react-router-dom";

import Home from "../MainPages/Home";
import S12 from "../MainPages/S12";
import Calendar from "../S12/Calendar/Calendar"
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
import HtmlCodes  from "../S12/Wad/HtmlCodes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/S12",
    element: <S12 />,
  },
  {
    path: "/S12/Calendar",
    element: <Calendar />,
  },
  {
    path: "/S12/Discrete",
    element: <Discrete />,
  },
  {
    path: "/S12/Wad",
    element: <Wad />,
  },
  {
    path: "/S12/Wad/HtmlCodes",
    element: <HtmlCodes />,
  },
  {
    path: "/S12/Oop",
    element: <Oop />,
  },
  {
    path: "/S12/Oop/JavaCodes",
    element: <JavaCodes />,
  },
  {
    path: "/S12/Oop/OopMid",
    element: <OopMid/>,
  },
  {
    path: "/S12/Opde",
    element: <Opde />,
  },
  {
    path: "/S12/Eee",
    element: <Eee />,
  },
  {
    path: "/S12/Eee/EeeLab",
    element: <EeeLab />,
  },
  {
    path: "/S12/Ed",
    element: <Ed />,
  },
  {
    path: "/S12/Bs",
    element: <Bs />,
  },
  {
    path: "/S12/Bs/BsHistory/BsTimeLine",
    element: <BsTimeLine />,
  },
]);

export default router;
