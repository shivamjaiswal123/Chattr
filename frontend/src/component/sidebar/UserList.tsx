import { useUser } from '../../context/UserProvider';
import type { User } from '../../types';

type LastMessage = boolean;
function UserList({
  users,
  showLastMessage,
}: {
  users: User[];
  showLastMessage: LastMessage;
}) {
  const { setSelectedUserId } = useUser();

  return (
    <div className="divide-y divide-gray-200">
      {users.map((user) => {
        return (
          <div
            onClick={() => setSelectedUserId(user._id)}
            className="p-4 flex items-center gap-3 mt-2 cursor-pointer"
          >
            {/* Avatar */}
            <div className="relative">
              <img
                className="size-12 rounded-full object-cover"
                src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
                alt={user.fullname}
              />
            </div>
            <div className="font-medium">{user.fullname}</div>
            {/* Last Message */}
            {showLastMessage && (
              <div className="text-sm flex-1">
                <span className="text-gray-500 line-clamp-1 mt-1">
                  Lets's catch up today at 5 Lets's catch up today at 5 Lets's
                  catch up today at 5
                </span>
              </div>
            )}

            {/* Unread Message counter / Last seen */}
            {/* <span className="text-xs text-gray-500">1d ago</span> */}
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
