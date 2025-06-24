
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const statsData = [
  { title: "New Orders", value: "24", change: "+12%", color: "text-blue-600" },
  { title: "Orders This Month", value: "156", change: "+8%", color: "text-green-600" },
  { title: "Delivered Orders", value: "142", change: "+15%", color: "text-purple-600" },
  { title: "Total Revenue", value: "$12,450", change: "+22%", color: "text-orange-600" },
  { title: "Active Coupons", value: "8", change: "-2", color: "text-red-600" },
];

const monthlyData = [
  { month: 'Jan', sales: 4000, orders: 24 },
  { month: 'Feb', sales: 3000, orders: 18 },
  { month: 'Mar', sales: 5000, orders: 32 },
  { month: 'Apr', sales: 4500, orders: 28 },
  { month: 'May', sales: 6000, orders: 38 },
  { month: 'Jun', sales: 5500, orders: 35 },
];

const orderStatusData = [
  { name: 'New', value: 24, color: '#8884d8' },
  { name: 'In Progress', value: 18, color: '#82ca9d' },
  { name: 'Delivered', value: 142, color: '#ffc658' },
  { name: 'Cancelled', value: 8, color: '#ff7c7c' },
];

export const DashboardContent = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Dashboard</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your store.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-200 hover-scale">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Sales Chart */}
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Monthly Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Order Status Distribution */}
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Order Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New order #1234 received", time: "2 minutes ago", type: "order" },
              { action: "Product 'Wireless Headphones' updated", time: "15 minutes ago", type: "product" },
              { action: "User John Doe registered", time: "1 hour ago", type: "user" },
              { action: "Coupon 'SAVE20' created", time: "2 hours ago", type: "coupon" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'order' ? 'bg-blue-500' :
                  activity.type === 'product' ? 'bg-green-500' :
                  activity.type === 'user' ? 'bg-purple-500' : 'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
