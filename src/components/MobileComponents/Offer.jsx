import React from 'react';

const Offer = () => {


    const HeaderData = [{
        icon: <BsTruck />,
        title: "Free shipping",
        subtitle: "Incredible"

    },
    {
        icon: <MdOutlineWorkspacePremium />,
        title: "Premium Membership",
        subtitle: "Get Up to 70% discount*"

    },]
    
    return (
        <div className='mx-5 flex justify-between my-2 p-2 bg-[#FFEADC]'>
            {
                HeaderData?.map((item, idx) => <div key={idx} className={` text-white  my-2 px-5 flex  px-10 gap-3 items-center justify-center ${idx !== 3 ? "border-right w-[24%]" : "w-[30%] "} ${idx == 0 ? "justify-start" : idx == 3 ? "justify-end" : "justify-center"
                    }`}>
                    <div className={`${idx == 3 && "border border-white rounded-full px-5 py-2"} flex gap-3 items-center `}>
                        <span className='text-2xl'>{item?.icon}</span>
                        <div>
                            <h2 className='font-semibold'>{item?.title}</h2>
                            <h3 className='text-sm max-w-[170px]'>{item?.subtitle}</h3>
                        </div>

                        <span className='text-2xl'>{item?.sideIcon}</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Offer;