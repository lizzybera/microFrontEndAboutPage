

const Header = () => {
  return (
    <div className="w-full h-[90px] flex justify-center items-center bg-blue-500 pt-10 ">
        {/* main */}
        <div className="w-[80%] h-full flex justify-between items-center bg-white rounded-t-[30px] px-10 pt-5">
            {/* logo */}
        <div className="font-[700] text-[18px] text-[#404072] italic cursor-pointer">Micro FrontEnd</div>
        {/* navHolder */}
        <div className="flex gap-8 text-[15px] text-[#404072]">
            {/* nav */}
            <div className="hover:underline cursor-pointer hover:text-[dodgerblue]">Home</div>
            <div className="hover:underline cursor-pointer hover:text-[dodgerblue]">About</div>
            <div className="hover:underline cursor-pointer hover:text-[dodgerblue]">Contact</div>
        </div>
        </div>
    </div>
  )
}

export default Header