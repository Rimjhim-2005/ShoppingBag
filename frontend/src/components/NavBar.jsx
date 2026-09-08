const NavBar = () => {
  return (
    <>
      <nav className="bg-neutral-100 text-black p-4">
        <div className="container mx-auto flex justify-center items-center gap-10">
          <h1 className="text-xl font-bold px-5">Home</h1>
          <h1 className="text-xl font-bold px-5">History</h1>
          <h1 className="text-xl font-bold px-5">Settings</h1>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
