const About = () => {

    return (
        <div
            id="about"
            className="px-5 py-10 bg-[#e9e6e2] lg:px-30 min-h-screen
 flex flex-col md:flex-row justify-between items-start lg:items-center gap-5 md:gap-10 text-black/60">
            <div className="w-full lg:w-2/4 h-full flex flex-col justify-between items-start gap-5">
                <div className="uppercase tracking-widest text-xs md:text-sm">
                    Our Philosophy
                </div>
                <div className="text-2xl lg:text-6xl flex md:gap-1 flex-col font-georgia text-black">
                    <span>
                        Where Form Meets
                    </span>
                    <span className="italic">
                        Function
                    </span>
                </div>
                <div className="gap-5 flex flex-col text-sm ">
                    <p>
                        I believe that exceptional design is born from the marriage of aesthetic beauty and practical purpose. Every kitchen I create is a culinary sanctuary; every bedroom, a personal retreat.
                    </p>
                    <p>
                        With 1 years of experience in high-end residential design, I approach each project as a unique opportunity to tell a story—one that reflects the personality, lifestyle, and aspirations of those who will inhabit the space.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-2/4 grid grid-cols-2 gap-5 ">
                <div className="flex gap-10 flex-col">
                    <div className="bg-white p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <span className="text-black font-georgia text-2xl" >
                            1+
                        </span>
                        <span>
                            Experience
                        </span>
                    </div>
                    <div className="bg-white p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <span className="text-black font-georgia text-2xl" >
                            200+
                        </span>
                        <span>
                            Projects Completed
                        </span>
                    </div>
                </div>
                <div className="flex gap-10 flex-col mt-10">
                    <div className="bg-white p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <span className="text-black font-georgia text-2xl" >
                            1+
                        </span>
                        <span>
                            Experience
                        </span>
                    </div>
                    <div className="bg-white p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <span className="text-black font-georgia text-2xl" >
                            98%
                        </span>
                        <span>
                            Client Satisfaction
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
