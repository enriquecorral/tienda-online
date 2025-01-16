import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router";
import Main from "./views/Main";
import Results from "./views/Results";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/search/" element={<Results />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
