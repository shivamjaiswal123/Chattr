import { useState } from 'react';
import { mockUsers, type Users } from '../../data/mockData';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import Messages from './Messages';

function ChatWindow({ selectedUserId }: { selectedUserId: string | null }) {
  const [users, setUsers] = useState<Users[]>(mockUsers);

  const selectedUser = users.find((user) => user.id === selectedUserId) || null;

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-500">
            Select a conversation to start chatting
          </h3>
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1">
      <div className="flex flex-col h-screen">
        <ChatHeader users={selectedUser} />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatWindow;
