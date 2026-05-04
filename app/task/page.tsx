export default function taskpage() {
    return (
        <div className="bg-white h-screen flex gap-5 pb-70
         justify-center items-center">

            <div className="bg-cyan-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">

                <div className="flex gap-3">
                    <img src="/palette.svg"/>
                    <p>Design</p>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">Adobe Photoshop</h1>
                    <br/>
                    <div className="flex justify-between">
                        <p>In 6 days</p>
                        <div className="flex -space-x-3 items-center">
                            <img src="/img1.jpg" className="w-7 h-7 rounded-full border-2 border-white"/>
                            <img src="/img2.jpg" className="w-7 h-7 rounded-full border-2 border-white"/>
                            <img src="/img3.jpg" className="w-7 h-7 rounded-full border-2 border-white"/>
                            <div className="flex items-center w-7 h-7 rounded-full bg-white p-1.5 text-xs">
                                <p>+9</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-green-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">

                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <img src="/terminal-2.svg"/>
                        <p>AI</p>
                    </div>
                    <img src="/star.svg"/>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>
                    <br/>
                    <div className="flex justify-between">
                        <p>In 7 days</p>
                        <div className="flex -space-x-3 items-center">
                            <img src="/img7.jpg" className="w-7 h-7 rounded-full border-2 border-white"/>
                            <img src="/img8.jpg" className="w-7 h-7 rounded-full border-2 border-white"/>
                            <img src="/img9.jpg" className="w-7 h-7 rounded-full border-2 border-white"/>
                            <div className="flex items-center w-7 h-7 rounded-full bg-white p-1.5 text-xs">
                                <p>+3</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>

        
    );
}