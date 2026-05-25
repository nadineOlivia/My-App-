import Button from "./_components/button-1";
import Card from "./_components/card";
import Badge from "./_components/bagde";

export default function navbarpage() {
  return (
    <div className="h-screen p-8 bg-black">
      <div className="w-96 bg-gray-100 rounded-xl text-gray-800 p-8 flex flex-col gap-x-0.5">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-2xl">Coding Labs</h2>
        </div>
        <Card />
        <Button/>
        <Badge/>
      </div>
    </div>
  );
}