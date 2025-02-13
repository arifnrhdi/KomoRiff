import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faCircleInfo,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const NavbarMobile = () => {
  return (
    <div className="sticky bottom-2 z-50 mx-10 flex items-center justify-center md:hidden">
      <div className="rounded-xl bg-slate-300/70 px-4 py-3 text-zinc-900 backdrop-blur-2xl transition-colors duration-200 dark:bg-zinc-800/70 dark:text-gray-300">
        <div className="flex flex-row items-center justify-center gap-[16vw]">
          <a href="/" title="Home">
            <FontAwesomeIcon
              className="cursor-pointer rounded p-3 text-xl hover:bg-slate-400/60 dark:hover:bg-zinc-600"
              icon={faHouse}
            />
          </a>
          <a href="/about" title="About">
            <FontAwesomeIcon
              className="cursor-pointer rounded p-3 text-xl hover:bg-slate-400/60 dark:hover:bg-zinc-600"
              icon={faCircleInfo}
            />
          </a>
          <a href="/blog" title="Blog">
            <FontAwesomeIcon
              className="cursor-pointer rounded p-3 text-xl hover:bg-slate-400/60 dark:hover:bg-zinc-600"
              icon={faBlog}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
