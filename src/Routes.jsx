import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router";
import Main from "./views/Main";
import Results from "./views/Results";
import Cart from "./views/Cart";
import Returns from "./views/Returns";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/search/" element={<Results />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/returns/" element={<Returns />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
