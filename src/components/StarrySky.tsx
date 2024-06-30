import {
  Accessor,
  For,
  Show,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

function Star(props: {
  boundary: Accessor<{
    width: number;
    height: number;
  }>;
}) {
  const [config, setConfig] = createSignal({
    size: ~~(Math.random() * 8 + 1) * 0.25,
    top: ~~(Math.random() * props.boundary().height),
    left: ~~(Math.random() * props.boundary().width),
  });

  return (
    <div
      class="fixed bg-gradient-radial from-white via-transparent to-transparent opacity-10"
      style={`
        width: ${config().size}rem;
        height: ${config().size}rem;
        top: ${config().top}px;
        left: ${config().left}px;
      `}
    />
  );
}

export default function StarrySky() {
  const [show, setShow] = createSignal(true);
  const [boundary, setBoundary] = createSignal({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function resizeHandler() {
    setBoundary({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setShow(false);
    setShow(true);
  }

  onMount(() => {
    window.addEventListener("resize", resizeHandler);
  });

  onCleanup(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  return (
    <Show when={show()}>
      <div class="fixed top-0 left-0 w-screen h-screen select-none pointer-events-none">
        <div class="animate-pulse">
          <For
            each={[
              ...Array(
                Math.round(boundary().width / 100) *
                  Math.round(boundary().height / 100)
              ),
            ]}
          >
            {() => <Star boundary={boundary} />}
          </For>
        </div>
      </div>
    </Show>
  );
}
