
import { DataTable } from "./DataTable";

const categoryColumns = [
  { key: "id", title: "ID", sortable: true, width: "w-20" },
  { key: "name", title: "Category Name", sortable: true },
  { key: "description", title: "Description", sortable: false },
  { key: "products", title: "Products", sortable: true },
  { key: "status", title: "Status", sortable: true },
];

const categoryData = [
  { id: 1, name: "Electronics", description: "Electronic devices and gadgets", products: 156, status: "Active" },
  { id: 2, name: "Accessories", description: "Phone and computer accessories", products: 89, status: "Active" },
  { id: 3, name: "Audio", description: "Headphones, speakers, and audio equipment", products: 34, status: "Active" },
  { id: 4, name: "Gaming", description: "Gaming accessories and peripherals", products: 67, status: "Active" },
  { id: 5, name: "Home & Office", description: "Furniture and office supplies", products: 23, status: "Inactive" },
];

export const CategoriesContent = () => {
  const handleAdd = () => {
    console.log("Add new category");
  };

  const handleEdit = (category: any) => {
    console.log("Edit category:", category);
  };

  const handleDelete = (category: any) => {
    console.log("Delete category:", category);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">Categories</span>
      </div>

      <DataTable
        title="Categories"
        columns={categoryColumns}
        data={categoryData}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
