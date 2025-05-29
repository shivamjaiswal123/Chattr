import { WebSocket, WebSocketServer } from 'ws';

const onlineUsers = new Map<string, WebSocket>();

const broadcastOnlineUsers = () => {
  const userIds = Array.from(onlineUsers.keys());
  const payload = JSON.stringify({ type: 'online-users', payload: userIds });

  for (const [, socket] of onlineUsers) {
    socket.send(payload);
  }
};

export const startWebSocketServer = (http: any) => {
  const wss = new WebSocketServer({ server: http });

  console.log('Websocket server started...');

  wss.on('connection', function connection(ws: WebSocket) {
    console.log('New client connected');

    ws.on('error', console.error);

    ws.on('message', function message(data) {
      try {
        const parsed = JSON.parse(data.toString());

        const { type, payload } = parsed;

        if (!type || !payload) {
          console.warn('Invalid message format:', parsed);
          return;
        }

        if (type === 'join') {
          if (!payload.id) {
            console.warn('User ID is missing');
            return;
          }

          onlineUsers.set(payload.id, ws);

          // Send updated online users to all connected clients
          broadcastOnlineUsers();
        } else {
          const { senderId, receiverId, content } = payload;

          const receiverIdSocket = onlineUsers.get(receiverId);

          // TODO:: Save content to DB

          if (
            receiverIdSocket &&
            receiverIdSocket.readyState === WebSocket.OPEN
          ) {
            receiverIdSocket.send(JSON.stringify({ type: 'message', content }));
          }
        }
      } catch (err) {
        console.error('Something went wrong', err);
      }
    });

    ws.on('close', () => {
      // Remove disconnected user
      for (const [userId, socket] of onlineUsers) {
        if (socket === ws) {
          onlineUsers.delete(userId);
          break;
        }
      }
    });
  });
};
