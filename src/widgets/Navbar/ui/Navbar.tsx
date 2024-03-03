import React from "react";
import {classNames} from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>About</AppLink>
      </div>
    </div>
  );
};
