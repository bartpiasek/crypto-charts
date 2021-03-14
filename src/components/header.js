import React, { useState } from "react";
import DarkModeToggle from "./darkmode/DarkModeToggle";

const Header = () => {
  return (
    <div className="layout__header">
      <DarkModeToggle />
    </div>
  );
};

export default Header;
