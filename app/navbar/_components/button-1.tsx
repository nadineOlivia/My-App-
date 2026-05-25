import DetailCard from "./detail-card";

export default function Button() {
  return (
    <div className="p-6 bg-blue-100 rounded-xl">
      <p className="font-bold">General</p>
      <div className="flex items-center gap-12">
        <DetailCard img="/folder.svg" title="Projects"/>
      </div>
      <div className="flex items-center gap-12">
        <DetailCard img="/users-group.svg" title="Groups" />
      </div>
       <div className="flex items-center gap-12">
        <DetailCard img="/flag.svg" title="Reports"/>
      </div>
    </div>
    
  );
}