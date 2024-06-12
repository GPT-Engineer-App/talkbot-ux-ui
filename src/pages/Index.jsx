import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to AI Clones</h1>
      <p className="mb-4">Create and manage your AI clones easily.</p>
      <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create New Clone</Link>
    </div>
  );
};

export default Index;