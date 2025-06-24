
import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface Order {
  id: number;
  customerName: string;
  total: number;
  status: string;
  createdAt: string;
}

export interface NotificationSettings {
  showToasts: boolean;
}

export const useNotifications = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [lastChecked, setLastChecked] = useState<string>(new Date().toISOString());
  const [settings, setSettings] = useState<NotificationSettings>({ showToasts: true });
  const { toast } = useToast();

  // Mock API call to fetch new orders
  const fetchNewOrders = useCallback(async (): Promise<Order[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Mock data - in a real app, this would be an API call
    const mockOrders: Order[] = [
      {
        id: Math.floor(Math.random() * 1000) + 1000,
        customerName: 'John Doe',
        total: 129.99,
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
      {
        id: Math.floor(Math.random() * 1000) + 2000,
        customerName: 'Jane Smith',
        total: 89.50,
        status: 'pending',
        createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
      },
    ];

    // Randomly return new orders (simulate real-time behavior)
    return Math.random() > 0.8 ? [mockOrders[Math.floor(Math.random() * mockOrders.length)]] : [];
  }, []);

  const checkForNewOrders = useCallback(async () => {
    try {
      const newOrders = await fetchNewOrders();
      
      if (newOrders.length > 0) {
        setOrders(prevOrders => {
          const updatedOrders = [...newOrders, ...prevOrders].slice(0, 10); // Keep only latest 10
          return updatedOrders;
        });
        
        setUnreadCount(prev => prev + newOrders.length);
        
        // Show toast notification for new orders
        if (settings.showToasts) {
          newOrders.forEach(order => {
            toast({
              title: "New Order Received!",
              description: `Order #${order.id} from ${order.customerName} - $${order.total}`,
            });
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch new orders:', error);
    }
  }, [fetchNewOrders, settings.showToasts, toast]);

  const markAsRead = useCallback(() => {
    setUnreadCount(0);
    setLastChecked(new Date().toISOString());
  }, []);

  const toggleToastNotifications = useCallback(() => {
    setSettings(prev => ({ ...prev, showToasts: !prev.showToasts }));
  }, []);

  // Polling effect
  useEffect(() => {
    // Initial load
    checkForNewOrders();
    
    // Set up polling every 30 seconds
    const interval = setInterval(checkForNewOrders, 30000);
    
    return () => clearInterval(interval);
  }, [checkForNewOrders]);

  return {
    orders,
    unreadCount,
    settings,
    markAsRead,
    toggleToastNotifications,
    checkForNewOrders,
  };
};
