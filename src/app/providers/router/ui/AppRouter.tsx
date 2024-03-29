import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfog/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>LOading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
