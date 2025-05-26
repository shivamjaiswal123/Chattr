import { useState } from 'react';
import ChatWindow from './chat/ChatWindow';
import Sidebar from './sidebar/Sidebar';

function Homepage() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      <Sidebar setSelectedUserId={setSelectedUserId} />
      <ChatWindow selectedUserId={selectedUserId} />
    </div>
  );
}

export default Homepage;
