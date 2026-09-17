import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Layout() {
  return (
    <div className=" mx-auto flex flex-col h-screen">
      <header className="w-full  bg-blue-200 py-5 items-center   ">
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="w-[80%] mx-auto text-center py-10 ">footer</footer>
    </div>
  );
}

export default Layout;
