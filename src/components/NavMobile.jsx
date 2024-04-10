import React from "react";

import { navigation } from "../data";

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav className="h-full">
      <ul className="flex flex-col justify-center items-center h-full space-y-5">
        {navigation.map((item, index) => {
          return (
            <li className="capitalize font-medium text-blue" key={index}>
              <a href={item.href} onClick={() => setNavMobile(!navMobile)}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
