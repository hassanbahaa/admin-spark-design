
import { DataTable } from "./DataTable";

const offerColumns = [
  { key: "id", title: "ID", sortable: true, width: "w-20" },
  { key: "title", title: "Offer Title", sortable: true },
  { key: "discount", title: "Discount", sortable: true },
  { key: "startDate", title: "Start Date", sortable: true },
  { key: "endDate", title: "End Date", sortable: true },
  { key: "used", title: "Used", sortable: true },
  { key: "status", title: "Status", sortable: true },
];

const offerData = [
  { id: 1, title: "Summer Sale", discount: "25%", startDate: "2024-06-01", endDate: "2024-08-31", used: 245, status: "Active" },
  { id: 2, title: "Electronics Discount", discount: "$50", startDate: "2024-06-15", endDate: "2024-07-15", used: 89, status: "Active" },
  { id: 3, title: "New Customer Offer", discount: "15%", startDate: "2024-05-01", endDate: "2024-12-31", used: 156, status: "Active" },
  { id: 4, title: "Flash Sale", discount: "40%", startDate: "2024-06-20", endDate: "2024-06-25", used: 67, status: "Expired" },
];

export const OffersContent = () => {
  const handleAdd = () => {
    console.log("Add new offer");
  };

  const handleEdit = (offer: any) => {
    console.log("Edit offer:", offer);
  };

  const handleDelete = (offer: any) => {
    console.log("Delete offer:", offer);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">Offers</span>
      </div>

      <DataTable
        title="Offers"
        columns={offerColumns}
        data={offerData}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
