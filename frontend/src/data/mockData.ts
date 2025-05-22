export interface Users {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  unreadCount?: number;
  lastSeen?: Date;
}

export const mockUsers: Users[] = [
  {
    id: 'user-1',
    name: 'Emma Watson',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'online',
    unreadCount: 2,
  },
  {
    id: 'user-2',
    name: 'Liam Johnson',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'offline',
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
  },
  {
    id: 'user-3',
    name: 'Olivia Martinez',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'online',
  },
  {
    id: 'user-4',
    name: 'Noah Williams',
    avatar:
      'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'away',
    unreadCount: 5,
  },
  {
    id: 'user-5',
    name: 'Sophia Brown',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'online',
  },
  {
    id: 'user-6',
    name: 'James Davis',
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'offline',
    lastSeen: new Date(Date.now() - 86400000), // 1 day ago
  },
];
