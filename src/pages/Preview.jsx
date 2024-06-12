import { useState } from "react";

const Preview = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Handle sending message to AI clone
    console.log({ message });
    setResponse("This is a response from the AI clone.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clone Preview</h1>
      <form onSubmit={handleSendMessage}>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold mb-2">Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Preview;