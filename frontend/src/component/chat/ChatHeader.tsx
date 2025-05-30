import type { User } from '../../types';

interface ChatHeaderProps {
  user: User;
}
function ChatHeader({ user }: ChatHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <div>
          <img
            src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
            alt={user.fullname}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div className="ml-3">
          <h2 className="text-sm font-medium text-gray-900">{user.fullname}</h2>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
