import pics from "../../assets/images.jfif"

const HeroPage = () => {
  return (
        // {/* container */}
    <div className="w-full h-[650px] flex justify-center items-center bg-blue-500">
        {/* main */}
        <div className="w-[80%] h-full flex flex-col items-center pt-11 bg-white">
                <div className="text-[15px] text-[#5f5f74] uppercase font-[500] mt-6">what drives us</div>

                <div className="text-[40px] text-[#404072] font-[700] w-[500px]  leading-10 text-center mt-9 mb-3">Better health decisions in all people's hands</div>

                <div className="w-[700px] text-center text-[20px] mt-7 text-[#4d4d95] font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque mollitia saepe cupiditate nemo voluptas dolorem debitis officia? Omnis eaque, debitis nam dolores nesciunt eligendi molestiae ipsam 
                </div>

                <img src={pics} className="w-[200px] mt-5" />
        </div>

    </div>
  )
}

export default HeroPage