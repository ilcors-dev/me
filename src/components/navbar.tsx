import classNames from "classnames";
import React from "react";
import MemojiLoop from "./memoji-loop";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <nav
      {...props}
      ref={ref}
      className={classNames(
        className,
        "flex flex-col items-center justify-between space-y-4 sm:space-y-0 sm:py-10 md:flex-row lg:py-6",
      )}
      role="navigation"
    >
      <MemojiLoop />
      <div className="flex items-center space-x-4">
        <Link
          className="mr-5 text-xl font-semibold hover:underline"
          href="/blog"
        >
          Blog
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
