import TempLogo from "../assets/TempLogo.svg";

export default function ComingSoonPage() {
  return (
    <>
      <div class="size-full flex select-none">
        <div class="m-auto">
          <img width="256px" height="256px" src={TempLogo} draggable={false} />
          <p class="text-center text-3xl pb-14">Coming Soon</p>
        </div>
      </div>
    </>
  );
}
