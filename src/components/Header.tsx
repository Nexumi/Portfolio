import { IconMenu2 } from "@tabler/icons-solidjs";
import TempLogo from "../assets/TempLogo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./common/dropdown-menu";

export default function Header() {
  return (
    <div class="fixed h-24 w-[calc(100%-5px)] flex justify-between items-center backdrop-blur-sm">
      <img class="h-full select-none" src={TempLogo} draggable={false} />
      <div class="m-10">
        <HeaderMenu />
      </div>
    </div>
  );
}

function HeaderMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconMenu2 />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="bg-white p-0">
        <DropdownMenuLabel>Placeholder Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="hover:bg-gray-100">
          Placeholder #1
        </DropdownMenuItem>
        <DropdownMenuItem class="hover:bg-gray-100">
          Placeholder #2
        </DropdownMenuItem>
        <DropdownMenuItem class="hover:bg-gray-100">
          Placeholder #3
        </DropdownMenuItem>
        <DropdownMenuItem class="hover:bg-gray-100">
          Placeholder #4
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
