
import { DataTable } from "./DataTable";

const orderColumns = [
  { key: "id", title: "Order ID", sortable: true, width: "w-24" },
  { key: "customer", title: "Customer", sortable: true },
  { key: "date", title: "Date", sortable: true },
  { key: "total", title: "Total", sortable: true },
  { key: "status", title: "Status", sortable: true },
  { key: "payment", title: "Payment", sortable: true },
];

const orderData = [
  { id: "#1234", customer: "John Doe", date: "2024-06-24", total: "$299.99", status: "Delivered", payment: "Paid" },
  { id: "#1235", customer: "Jane Smith", date: "2024-06-24", total: "$159.99", status: "In Progress", payment: "Paid" },
  { id: "#1236", customer: "Bob Johnson", date: "2024-06-23", total: "$89.99", status: "New", payment: "Pending" },
  { id: "#1237", customer: "Alice Brown", date: "2024-06-23", total: "$199.99", status: "Delivered", payment: "Paid" },
  { id: "#1238", customer: "Charlie Wilson", date: "2024-06-22", total: "$449.99", status: "In Progress", payment: "Paid" },
  { id: "#1239", customer: "Diana Davis", date: "2024-06-22", total: "$79.99", status: "Cancelled", payment: "Refunded" },
  { id: "#1240", customer: "Eve Anderson", date: "2024-06-21", total: "$329.99", status: "Delivered", payment: "Paid" },
];

export const OrdersContent = () => {
  const handleAdd = () => {
    console.log("Add new order");
  };

  const handleEdit = (order: any) => {
    console.log("Edit order:", order);
  };

  const handleDelete = (order: any) => {
    console.log("Delete order:", order);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">Orders</span>
      </div>

      <DataTable
        title="Orders"
        columns={orderColumns}
        data={orderData}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
