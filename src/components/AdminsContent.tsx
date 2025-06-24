
import { DataTable } from "./DataTable";

const adminColumns = [
  { key: "id", title: "ID", sortable: true, width: "w-20" },
  { key: "name", title: "Name", sortable: true },
  { key: "email", title: "Email", sortable: true },
  { key: "role", title: "Role", sortable: true },
  { key: "lastLogin", title: "Last Login", sortable: true },
  { key: "status", title: "Status", sortable: true },
];

const adminData = [
  { id: 1, name: "Admin User", email: "admin@company.com", role: "Super Admin", lastLogin: "2024-06-24 10:30", status: "Active" },
  { id: 2, name: "John Manager", email: "john@company.com", role: "Manager", lastLogin: "2024-06-24 09:15", status: "Active" },
  { id: 3, name: "Sarah Editor", email: "sarah@company.com", role: "Editor", lastLogin: "2024-06-23 16:45", status: "Active" },
  { id: 4, name: "Mike Support", email: "mike@company.com", role: "Support", lastLogin: "2024-06-22 14:20", status: "Inactive" },
];

export const AdminsContent = () => {
  const handleAdd = () => {
    console.log("Add new admin");
  };

  const handleEdit = (admin: any) => {
    console.log("Edit admin:", admin);
  };

  const handleDelete = (admin: any) => {
    console.log("Delete admin:", admin);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">Admins</span>
      </div>

      <DataTable
        title="Admins"
        columns={adminColumns}
        data={adminData}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
