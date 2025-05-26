const Header = () => {
  return (
    // <!-- Navbar Starts -->
    <nav className="py-6 md:py-8 sticky top-0 w-full !bg-dark z-50 border-b border-b-light/30">
      <div className="container flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/" className="flex items-center text-2xl font-semibold gap-3 bg-light py-1 px-3 rounded text-dark">
          <img className="size-[40px]" src="frame.png" alt="frame" />
          Tasker
        </a>
        {/* <!-- Logo Ends --> */}

        {/* Add task Button */}
        <a href="#tasks" className="border border-light py-2 px-4 cursor-pointer hover:bg-primary hover:text-dark transition duration-300 hover:border-primary">Task List</a>
      </div>
    </nav>
    // <!-- Navbar Ends -->
  );
};

export default Header;
