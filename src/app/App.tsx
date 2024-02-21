import React, { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
};

export default App;
