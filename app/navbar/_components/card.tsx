import DetailCard from "./detail-card";

export default function Card() {
  return (
    <div className="p-6 bg-blue-100 rounded-xl">
      <p className="font-bold">Main Menu</p>
      <div className="flex items-center gap-12">
        <DetailCard img="/layout-dashboard.svg" title="Dashboard"/>
      </div>
      <div className="flex items-center gap-12">
        <DetailCard img="/report.svg" title="Overview" />
      </div>
       <div className="flex items-center gap-12">
        <DetailCard img="/Chart-histogram.svg" title="Analytic"/>
      </div>
    </div>
    
  );
}