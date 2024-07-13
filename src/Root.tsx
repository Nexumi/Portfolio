import { Route, Router } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
import StarrySky from "./components/StarrySky";
import ComingSoonPage from "./pages/ComingSoonPage";
import HomePage from "./pages/HomePage";

export default function Root() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });
  const [isInBound, setIsInBound] = createSignal(false);

  function handleMouseMove(event: { clientX: number; clientY: number }) {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div
      class="w-screen h-screen overflow-auto bg-slate-950 text-white"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInBound(true)}
      onMouseLeave={() => setIsInBound(false)}
    >
      <Router>
        <Route path="/*" component={ComingSoonPage} />
        <Route path="/home" component={HomePage} />
      </Router>
      <StarrySky />
      <Show when={isInBound()}>
        <div
          class="fixed size-80 rounded-full bg-gradient-radial from-white via-transparent to-transparent opacity-5 select-none pointer-events-none"
          style={`left: ${pos().x - 160}px; top: ${pos().y - 160}px;`}
        />
      </Show>
    </div>
  );
}
