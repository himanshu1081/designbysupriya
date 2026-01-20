const About = () => {

    return (
        <div
            id="about"
            className="px-5 py-10 bg-[#e9e6e2] lg:px-30 min-h-screen 
 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-10 text-black/60">
            <div className="w-full lg:w-2/4 h-full flex flex-col justify-between items-start gap-2 lg:gap-20">
                <div className="text-2xl md:text-4xl lg:text-6xl flex md:gap-1 flex-col font-georgia text-black">
                    <span>
                        Where Style Meets
                    </span>
                    <span className="italic">
                        Purpose
                    </span>
                </div>
                <div className="gap-5 flex flex-col text-sm ">
                    <p>
                        I believe truly memorable design comes from blending beauty with functionality. Each kitchen I craft is a space that inspires cooking and connection, while every bedroom becomes a serene personal retreat.
                    </p>
                    <p>
                        With a year of experience in high-end residential design, I treat every project as a unique story—one that reflects the personality, lifestyle, and dreams of the people who live there.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-2/4 grid grid-cols-2 gap-5 text-base lg:text-2xl">
                <div className="flex gap-10 flex-col">
                    <div className="bg-[#f9f8f6] p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl  border border-black/5 ">
                        <span className="text-black font-georgia " >
                            3+
                        </span>
                        <span>
                            Experience
                        </span>
                    </div>
                    <div className="bg-[#f9f8f6]  p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl  border border-black/5">
                        <span className="text-black font-georgia" >
                            200+
                        </span>
                        <span>
                            Projects Completed
                        </span>
                    </div>
                </div>
                <div className="flex gap-10 flex-col mt-10">
                    <div className="bg-[#f9f8f6] p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl border border-black/5">
                        <span className="text-black font-georgia " >
                            50+
                        </span>
                        <span>
                            Testimonials
                        </span>
                    </div>
                    <div className="bg-[#f9f8f6]  p-5 lg:p-10 w-fit h-fit flex flex-col gap-2 items-center justify-center rounded-2xl border border-black/5">
                        <span className="text-black font-georgia" >
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
