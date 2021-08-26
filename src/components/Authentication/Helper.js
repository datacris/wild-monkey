import { authentication } from "../../firebase";

export const handleLogout = () => {
  localStorage.setItem("userEmail", JSON.stringify(""));
  localStorage.setItem("userId", JSON.stringify(""));
  authentication.signOut();
  window.location.assign("/home");
};
