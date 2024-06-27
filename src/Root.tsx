import { Route, Router } from "@solidjs/router";
import ComingSoonPage from "./pages/ComingSoonPage";

export default function Root() {
  return (
    <div class="w-screen h-screen overflow-auto bg-slate-900 text-white">
      <Router>
        <Route path="/*" component={ComingSoonPage} />
      </Router>
    </div>
  );
}
