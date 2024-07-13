import TempLogo from "../assets/TempLogo.svg";

export default function Header() {
  return (
    <>
      <div class="h-24 flex justify-between items-center">
        <img class="h-full" src={TempLogo} draggable={false} />
        <div class="m-10">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
