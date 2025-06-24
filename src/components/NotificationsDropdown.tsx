
import { useState } from 'react';
import { Bell, Settings, Eye } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNotifications } from '@/hooks/useNotifications';

export const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { orders, unreadCount, settings, markAsRead, toggleToastNotifications } = useNotifications();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && unreadCount > 0) {
      // Mark as read when dropdown is opened
      setTimeout(() => markAsRead(), 500);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-80 bg-popover border border-border">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleToastNotifications}
            className="h-6 px-2"
          >
            <Settings className="h-3 w-3" />
          </Button>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {orders.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground text-sm">
            No new orders
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto">
            {orders.map((order) => (
              <DropdownMenuItem 
                key={order.id} 
                className="cursor-pointer p-3 flex flex-col items-start space-y-1"
                onClick={() => {
                  // In a real app, this would navigate to the order details
                  console.log('Navigate to order:', order.id);
                }}
              >
                <div className="flex justify-between items-start w-full">
                  <div className="flex-1">
                    <p className="font-medium text-sm">New Order #{order.id}</p>
                    <p className="text-xs text-muted-foreground">
                      {order.customerName} • ${order.total}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatTime(order.createdAt)}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {order.status}
                </Badge>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="text-center justify-center">
          <Eye className="h-4 w-4 mr-2" />
          View All Orders
        </DropdownMenuItem>
        
        {settings.showToasts && (
          <div className="px-3 py-2 text-xs text-muted-foreground border-t">
            ✓ Toast notifications enabled
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
