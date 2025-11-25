"use client";
import React from "react";
import { logout } from "../../actions/auth-action";
export const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };
  return (
    <span
      onClick={handleLogout}
      className="inline-block w-full cursor-pointer text-destructive"
    >
      Logout
    </span>
  );
};

export default LogoutButton;
