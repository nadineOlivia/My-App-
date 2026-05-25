import DetailCard from "./detail-card";

export default function Bagde() {
  return (
    <div className="p-6 bg-blue-100 rounded-xl">
      <p className="font-bold">Account</p>
      <div className="flex items-center gap-12">
        <DetailCard img="/user-circle.svg" title="Profile"/>
      </div>
      <div className="flex items-center gap-12">
        <DetailCard img="/settings.svg" title="Setting" />
      </div>
    </div>
    
  );
}