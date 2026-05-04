export default function userspage() {
    return (
            <section className="h-screen bg-blue-200 flex gap-5 pt-47 justify-center">
            <div className="bg-green-100 p-8 h-100 w-8 rounded-4xl flex-col justify between text-black">
             <div className="flex gap-10">
                <p className="font-bold">Client Details</p>
                <img src="/x.svg" alt="client"/>
             </div>
             
             <div className="flex -space-x-5 items-center">
                     <img src="/img1.jpg" className="w-9 h-7 rounded-full border-6 border-black"/>
                     <h2 className="w-2 h-2 text-2xl font-bold">Cornelius Greenfelder</h2>
             </div>
              <div className="flex gap-15">
                <p className="font-bold">verified</p>
                </div>
            </div>
            </section>
    );
}