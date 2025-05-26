import type { Users } from '../../data/mockData';

interface ChatHeaderProps {
  users: Users;
}
function ChatHeader({ users }: ChatHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative">
          <img
            src={users.avatar}
            alt={users.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div
            className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
              users.status === 'online'
                ? 'bg-green-500'
                : users.status === 'away'
                ? 'bg-yellow-500'
                : 'bg-gray-400'
            }`}
          />
        </div>
        <div className="ml-3">
          <h2 className="text-sm font-medium text-gray-900">{users.name}</h2>
          <p className="text-xs text-gray-500">
            {users.status === 'online'
              ? 'Online'
              : users.status === 'away'
              ? 'Away'
              : 'Offline'}
          </p>
        </div>
      </div>
      {/* <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Phone size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Video size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      </div> */}
    </div>
  );
}

export default ChatHeader;
