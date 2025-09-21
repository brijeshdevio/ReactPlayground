import { useState } from "react";
import Button from "./Button";

export default function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsLoggedIn((pre) => !pre);
  };

  return (
    <div className="card bg-base-200 min-w-[320px] w-fit">
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">Login Toggle</h2>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-black text-accent">
            {isLoggedIn
              ? window?.navigator?.platform || "You are logged in"
              : "You are logged out"}
          </h3>
          <Button className="btn-primary btn-sm" onClick={handleToggle}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
}
