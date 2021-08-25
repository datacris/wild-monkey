import React from "react";
import { authentication } from "../../firebase";

export const handleLogout = () => {
  authentication.signOut();
  window.location.assign("/home");
};