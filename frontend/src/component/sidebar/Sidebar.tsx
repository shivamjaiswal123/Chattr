import { useState } from 'react';
import UserList from './UserList';
import { Search } from 'lucide-react';
import { authStore } from '../../store/authStore';

type Tab = 'chat' | 'new chat';

function Sidebar() {
  const user = authStore((state) => state.user);

  const [activeTab, setActiveTab] = useState<Tab>('chat');

  return (
    <div className="w-96 flex flex-col">
      {/* Header */}
      <div className="p-4 space-y-3">
        <h1 className="text-xl font-medium">Messages</h1>
        <div className="relative">
          <div className="absolute left-3 top-3">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search users"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Tab */}
      <div className="flex border-b border-gray-300 mx-4">
        <button
          className={`flex-1 py-2 text-sm font-medium 
              ${
                activeTab === 'chat'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }
          `}
          onClick={() => setActiveTab('chat')}
        >
          Chats
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium 
              ${
                activeTab === 'new chat'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }
          `}
          onClick={() => setActiveTab('new chat')}
        >
          New Chats
        </button>
      </div>

      {/* Users */}
      <div className="flex-1 overflow-y-auto">
        <UserList />
      </div>

      {/* Profile */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <div className="size-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
            YO
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {user?.fullname}
            </p>
            <p className="text-xs text-gray-500">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
