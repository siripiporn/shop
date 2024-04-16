import React from "react";
import { TypeAnimation } from "react-type-animation";
function Header() {
  return (
    <div className="relative">
      <img
        className="object-cover"
        src="https://images.unsplash.com/photo-1687585612091-5554b00c50a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center text-white">
        <TypeAnimation
          sequence={[ 
            "We produce shoes for Nike",
            1000,
            "We produce shoes for Adidas",
            1000,
            "We produce shoes for Reebok",
            1000,
            "We produce shoes for Vans",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Header;
