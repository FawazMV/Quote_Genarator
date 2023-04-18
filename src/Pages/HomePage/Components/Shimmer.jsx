const Shimmer = () => (

    <div className='min-h-[200px] text-gray-60 py-3 px-5 md:px-14 bg-[#d05252] w-full md:w-[600px]  rounded-xl flex justify-center flex-col'>
        <div className="flex-grow my-4">
            <div className=" animate-pulse rounded-lg mb-3 h-6 opacity-80 bg-[#a84a4a] "></div>
            <div className=" animate-pulse rounded-lg mb-3 h-6 opacity-80 bg-[#a84a4a] "></div>
            <div className=" animate-pulse w-[50%] rounded-lg opacity-80 mb-2 h-6 bg-[#a84a4a] "></div>
        </div>
        <div className='flex justify-center my-1'>
            <div className="h-5 opacity-80 bg-[#a84a4a] rounded-lg w-32 "></div>
        </div>
    </div>
)
export default Shimmer