import { useEffect, useState } from 'react';
import { getAllUsers, type User } from '../api/user.api';
import ChatWindow from './chat/ChatWindow';
import Sidebar from './sidebar/Sidebar';

function Homepage() {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const res = await getAllUsers();
    if (res.success) {
      setAllUsers(res.users);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar allUsers={allUsers} />
      <ChatWindow allUsers={allUsers} />
    </div>
  );
}

export default Homepage;
