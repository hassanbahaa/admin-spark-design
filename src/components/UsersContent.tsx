
import { DataTable } from "./DataTable";

const userColumns = [
  { key: "id", title: "ID", sortable: true, width: "w-20" },
  { key: "name", title: "Name", sortable: true },
  { key: "email", title: "Email", sortable: true },
  { key: "joinDate", title: "Join Date", sortable: true },
  { key: "orders", title: "Orders", sortable: true },
  { key: "totalSpent", title: "Total Spent", sortable: true },
  { key: "status", title: "Status", sortable: true },
];

const userData = [
  { id: 1, name: "John Doe", email: "john.doe@email.com", joinDate: "2024-01-15", orders: 12, totalSpent: "$1,299.99", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane.smith@email.com", joinDate: "2024-02-20", orders: 8, totalSpent: "$899.99", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@email.com", joinDate: "2024-03-10", orders: 5, totalSpent: "$549.99", status: "Active" },
  { id: 4, name: "Alice Brown", email: "alice.brown@email.com", joinDate: "2024-04-05", orders: 15, totalSpent: "$2,199.99", status: "Active" },
  { id: 5, name: "Charlie Wilson", email: "charlie.wilson@email.com", joinDate: "2024-05-12", orders: 3, totalSpent: "$299.99", status: "Inactive" },
];

export const UsersContent = () => {
  const handleAdd = () => {
    console.log("Add new user");
  };

  const handleEdit = (user: any) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (user: any) => {
    console.log("Delete user:", user);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">Users</span>
      </div>

      <DataTable
        title="Users"
        columns={userColumns}
        data={userData}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
