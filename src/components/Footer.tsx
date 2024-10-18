import { A } from "@solidjs/router";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCopyright,
} from "@tabler/icons-solidjs";

export default function Footer() {
  return (
    <div class="h-24 w-[calc(100%-5px)] mt-auto">
      <div class="h-24 flex flex-col justify-center items-center gap-y-1">
        <div class="flex gap-x-2">
          <A
            href="https://www.linkedin.com/in/jimmy-p-277796212/"
            target="_blank"
          >
            <IconBrandLinkedin />
          </A>
          <A href="https://github.com/Nexumi" target="_blank">
            <IconBrandGithub />
          </A>
        </div>
        <div class="flex text-xs">© 2024, Jimmy Pan</div>
      </div>
    </div>
  );
}
