import { useState } from 'react';
import { mockUsers } from '../../data/mockData';

function UserList() {
  const [users] = useState(mockUsers);
  return (
    <div className="divide-y divide-gray-200">
      {users.map((user) => {
        return (
          <div className="p-4 flex items-center gap-3 mt-2 cursor-pointer">
            {/* Avatar */}
            <div className="relative">
              <img
                className="size-12 rounded-full object-cover"
                src={user.avatar}
                alt={user.name}
              />
              <span
                className={`absolute bottom-0 left-9 size-3 rounded-full border-2 border-white ${
                  user.status === 'online'
                    ? 'bg-green-400'
                    : user.status === 'away'
                    ? 'bg-yellow-500'
                    : 'bg-gray-400'
                }`}
              />
            </div>

            {/* Last Message */}
            <div className="text-sm flex-1">
              <div className="font-medium">{user.name}</div>
              <span className="text-gray-500 line-clamp-1 mt-1">
                Lets's catch up today at 5 Lets's catch up today at 5 Lets's
                catch up today at 5
              </span>
            </div>

            {/* Unread Message counter / Last seen */}
            <span className="text-xs text-gray-500">1d ago</span>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
