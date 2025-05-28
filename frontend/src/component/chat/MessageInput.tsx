import { Send, Smile } from 'lucide-react';

function MessageInput() {
  return (
    <form className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-center">
        <button
          type="button"
          className="p-2 text-gray-500 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        >
          <Smile size={20} />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 mx-3 py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
