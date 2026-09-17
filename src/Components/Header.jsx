import Logo from "./Logo";
import { Navbar } from "./Navbar";

function Header() {
  return (
    <div className=" w-[80%] items-center flex flex-row mx-auto justify-between  ">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
