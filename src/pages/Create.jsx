import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [files, setFiles] = useState(null);
  const [voiceSamples, setVoiceSamples] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, description, language, files, voiceSamples });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Clone</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Language</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Files</label>
          <input
            type="file"
            onChange={(e) => setFiles(e.target.files)}
            className="w-full px-4 py-2 border rounded"
            multiple
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Voice Samples</label>
          <input
            type="file"
            onChange={(e) => setVoiceSamples(e.target.files)}
            className="w-full px-4 py-2 border rounded"
            multiple
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Clone
        </button>
      </form>
    </div>
  );
};

export default Create;