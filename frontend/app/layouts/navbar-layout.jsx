import { NavLink, Outlet } from "react-router";

export default function NavbarLayout() {
  return (
    <div className="bg-neutral-950 h-screen">
      <nav className="bg-neutral-100 h-20 flex items-center">
        <div className="container mx-auto h-full flex justify-center items-center gap-10">
          <NavLink to="/" className="btn-navbar">
            Home
          </NavLink>
          <NavLink to="/history" className="btn-navbar">
            History
          </NavLink>
          <NavLink to="/settings" className="btn-navbar">
            Settings
          </NavLink>
        </div>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
