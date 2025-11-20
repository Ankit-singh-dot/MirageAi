"use client";
import React from "react";
import { logout } from "@/app/actions/auth-actions";
const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };
  return <div></div>;
};

export default LogoutButton;
