import { classNames } from "shared/lib/classNames";
import cls from "./ThemeSwithcer.module.scss";
import React from "react";
import { useTheme } from "app/providers/ThemeProvider";
import {LightIcon} from "shared/assets/icons";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [props.className])}
      onClick={toggleTheme}
    >
      <LightIcon />
    </button>
  );
};
