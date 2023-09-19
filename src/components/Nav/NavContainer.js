import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";

import Nav from "./Nav";
import { useEffect } from "react";

const NavContainer = () => {
  const userName = useRecoilValue(userAtom).name;

  useEffect(() => {
    console.log(userName);
  }, []);

  return (
    <div>
      <Nav userName={userName}></Nav>
    </div>
  );
};

export default NavContainer;
