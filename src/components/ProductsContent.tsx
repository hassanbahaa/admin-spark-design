
import { DataTable } from "./DataTable";

const productColumns = [
  { key: "id", title: "ID", sortable: true, width: "w-20" },
  { key: "name", title: "Product Name", sortable: true },
  { key: "sku", title: "SKU", sortable: true },
  { key: "category", title: "Category", sortable: true },
  { key: "price", title: "Price", sortable: true },
  { key: "stock", title: "Stock", sortable: true },
  { key: "status", title: "Status", sortable: true },
];

const productData = [
  { id: 1, name: "Wireless Headphones", sku: "WH001", category: "Electronics", price: "$99.99", stock: 45, status: "Active" },
  { id: 2, name: "Smart Watch", sku: "SW002", category: "Electronics", price: "$199.99", stock: 23, status: "Active" },
  { id: 3, name: "Bluetooth Speaker", sku: "BS003", category: "Electronics", price: "$79.99", stock: 67, status: "Active" },
  { id: 4, name: "USB Cable", sku: "UC004", category: "Accessories", price: "$12.99", stock: 156, status: "Active" },
  { id: 5, name: "Phone Case", sku: "PC005", category: "Accessories", price: "$24.99", stock: 89, status: "Active" },
  { id: 6, name: "Laptop Stand", sku: "LS006", category: "Accessories", price: "$49.99", stock: 34, status: "Inactive" },
  { id: 7, name: "Wireless Mouse", sku: "WM007", category: "Electronics", price: "$39.99", stock: 78, status: "Active" },
  { id: 8, name: "Keyboard", sku: "KB008", category: "Electronics", price: "$89.99", stock: 56, status: "Active" },
];

export const ProductsContent = () => {
  const handleAdd = () => {
    console.log("Add new product");
  };

  const handleEdit = (product: any) => {
    console.log("Edit product:", product);
  };

  const handleDelete = (product: any) => {
    console.log("Delete product:", product);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">Products</span>
      </div>

      <DataTable
        title="Products"
        columns={productColumns}
        data={productData}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
