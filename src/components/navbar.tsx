import classNames from "classnames";
import React from "react";
import MemojiLoop from "./memoji-loop";
import ThemeSwitcher from "./theme-switcher";

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
        "flex flex-col items-center justify-between sm:py-10 md:flex-row lg:py-6",
      )}
      role="navigation"
    >
      <MemojiLoop />
      <ThemeSwitcher />
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
