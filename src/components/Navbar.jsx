import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">AI Clones</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/create" className="text-gray-300 hover:text-white">Create Clone</Link>
          <Link to="/settings" className="text-gray-300 hover:text-white">Clone Settings</Link>
          <Link to="/preview" className="text-gray-300 hover:text-white">Clone Preview</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;