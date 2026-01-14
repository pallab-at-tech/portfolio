<div
    className={`grid grid-rows-none grid-cols-[300px_1fr] lg:grid-cols-[480px_1fr] max-w-[calc(100vw-50px)] gap-4 p-6 max-h-[45vh] lg:max-h-[52vh] ${darkMode ? "bg-[#38393d] shadow-[inset_1px_-1px_20px_12px_rgb(10,0,10,0.15))] border-2 border-[#1e252fac]" : "bg-[#e9d6b4ea] shadow-[inset_1px_-1px_20px_8px_rgb(255,165,22,0.36)] border-2 border-amber-600/60"} rounded-xl`}
>

    <div className={`flex items-center justify-center
                                                rounded-2xl  bg-gradient-to-br
                                                 
                                                `}
    // border ${darkMode ? "from-[#33383ab6] to-[#42413fc3] border-gray-500" :
    // "from-[#eaccbe] to-[#e6d6ac] shadow-[inset_0_0_18px_rgba(180,120,30,0.15)] border-amber-600/60"}
    >
        <div className='rounded-2xl w-fit h-fit overflow-hidden border border-gray-500 p-4'>
            <img
                src={item.image}
                alt=""
                className="w-full max-h-[260px] object-contain"
            />
        </div>
    </div>

    <div className="flex flex-col gap-3 p-4 overflow-hidden sm:max-w-[calc(100vw-500px)] lg:max-w-[calc(100vw-600px)]">

        <h1 className={`font-semibold text-xl ${darkMode ? "text-[#ed770f]" : "text-amber-700"} leading-snug`}>
            {item.tittle}
        </h1>

        <div className={`text-[15px] font-semibold ${darkMode ? "text-[#f4f1ed]" : "text-[#472f0b]"} leading-relaxed line-clamp-[12]`}>
            {item.describe}
        </div>

    </div>
</div>