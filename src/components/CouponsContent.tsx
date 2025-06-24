
import { DataTable } from "./DataTable";

const couponColumns = [
  { key: "id", title: "ID", sortable: true, width: "w-20" },
  { key: "code", title: "Coupon Code", sortable: true },
  { key: "discount", title: "Discount", sortable: true },
  { key: "minOrder", title: "Min Order", sortable: true },
  { key: "used", title: "Used", sortable: true },
  { key: "limit", title: "Usage Limit", sortable: true },
  { key: "expiry", title: "Expiry Date", sortable: true },
  { key: "status", title: "Status", sortable: true },
];

const couponData = [
  { id: 1, code: "SAVE20", discount: "20%", minOrder: "$100", used: 45, limit: 100, expiry: "2024-12-31", status: "Active" },
  { id: 2, code: "WELCOME15", discount: "15%", minOrder: "$50", used: 123, limit: 500, expiry: "2024-12-31", status: "Active" },
  { id: 3, code: "FLASH30", discount: "30%", minOrder: "$200", used: 67, limit: 200, expiry: "2024-07-01", status: "Active" },
  { id: 4, code: "STUDENT10", discount: "10%", minOrder: "$25", used: 234, limit: 1000, expiry: "2024-12-31", status: "Active" },
  { id: 5, code: "EXPIRED50", discount: "50%", minOrder: "$300", used: 12, limit: 50, expiry: "2024-05-31", status: "Expired" },
];

export const CouponsContent = () => {
  const handleAdd = () => {
    console.log("Add new coupon");
  };

  const handleEdit = (coupon: any) => {
    console.log("Edit coupon:", coupon);
  };

  const handleDelete = (coupon: any) => {
    console.log("Delete coupon:", coupon);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">Coupons</span>
      </div>

      <DataTable
        title="Coupons"
        columns={couponColumns}
        data={couponData}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
