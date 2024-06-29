import { Route, Router } from "@solidjs/router";
import ComingSoonPage from "./pages/ComingSoonPage";
import { Show, createSignal } from "solid-js";

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
      class="w-screen h-screen overflow-auto bg-slate-900 text-white"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInBound(true)}
      onMouseLeave={() => setIsInBound(false)}
    >
      <Router>
        <Route path="/*" component={ComingSoonPage} />
      </Router>
      <Show when={isInBound()}>
        <div
          class="fixed size-80 rounded-full bg-gradient-radial from-white via-transparent to-transparent opacity-5 select-none pointer-events-none"
          style={`left: ${pos().x - 160}px; top: ${pos().y - 160}px;`}
        />
      </Show>
    </div>
  );
}
