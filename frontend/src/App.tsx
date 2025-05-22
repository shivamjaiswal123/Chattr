import ChatWindow from './component/chat/ChatWindow';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
