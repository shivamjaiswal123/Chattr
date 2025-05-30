import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import Messages from './Messages';
import { useUser } from '../../context/UserProvider';
import type { User } from '../../types';

function ChatWindow({ allUsers }: { allUsers: User[] }) {
  const { selectedUserId } = useUser();

  const selectedUser =
    allUsers.find((user) => user._id === selectedUserId) || null;

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
        <ChatHeader user={selectedUser} />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatWindow;
