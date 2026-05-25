export default function DetailCard({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    <div className="mt-2 text-gray-600 ">
      <div className="flex gap-2 items-center  ">
        <img src={img} className="h-4 w-4" />
        <p>{title}</p>
      </div>
    </div>
    
  );
  
}