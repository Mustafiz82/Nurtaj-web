'use client';

import { companyInfo, customerService, features, helpLinks, paymentMethods, socialLinks } from '@/Data/FooterData';
import Image from 'next/image';
import Link from 'next/link';



const Footer = () => {

    const Icon = ({ src, iconWidth = "20px" }) => (
        <Image
            src={src}
            alt="logo"
            priority
            width={500}
            height={500}
            style={{ width: iconWidth }}
        />
    );


    return (
        <footer className="bg-black text-white py-10 px-5 md:px-20">
            <div className="max-w-7xl mx-auto flex justify-between w-full gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company info</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        {
                            companyInfo?.map((item, idx) => <li key={idx}><Link href={item?.href}>{item?.name}</Link></li>)
                        }


                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Customer service</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        {
                            customerService?.map((item, idx) => <li key={idx}><Link href={item?.href}>{item?.name}</Link></li>)
                        }
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        {
                            helpLinks?.map((item, idx) => <li key={idx}><Link href={item?.href}>{item?.name}</Link></li>)
                        }
                    </ul>
                </div>

                {/* App and Social Links */}
                <div className='w-[30%]'>
                    <div className="mb-5 border-2 border-white rounded-xl overflow-hidden relative">
                        <Image
                            src="/images/Footer/selling-account.png"
                            alt="Sell on Nurtaj" width={400} height={150} className="rounded-lg h-[100px]" />
                        <div className="absolute p-2 top-0 left-0 w-full h-full bg-gradient-to-r from-black via-white/20 to-white/50">
                            <h2 className=' text-sm font-semibold '>Start Selling to Millions of Buyers <br />on Nurtaj</h2>

                            <button className='bg-primary p-2 mt-2 text-[12px] rounded-full'>
                                Start a Selling Account
                            </button>
                        </div>

                    </div>

                    <div>
                        <h2 className='text-lg font-semibold'>Download the Nurtaj App</h2>

                        <div className="grid mb-4  grid-cols-2">
                            {
                                features?.map((item, idx) => <div key={idx} className='flex text-sm mt-4 gap-2 items-center '>
                                    <Icon src={item?.icon} iconWidth={idx == 3 ? "16px" : "20px"} />
                                    <p>{item?.name}</p>
                                </div>)
                            }


                        </div>
                    </div>
                    <div className="flex gap-4 my-5 pt-5">
                        <Image src="/images/Footer/google-play.svg" alt="Google Play" width={500} height={500} className='w-1/2 h-auto' />
                        <Image src="/images/Footer/apple-store.svg" alt="App Store" width={500} height={500} className='w-1/2 h-auto' />
                    </div>

                </div>
            </div>

            {/* Payment Methods */}
            <div className='flex justify-between items-center mt-10'>
                <div>
                    <h2 className='font-bold text-lg text-white'> Connect with Nurtaj</h2>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-4">

                        {
                            paymentMethods?.map((item, idx) => <Image key={idx} src={item?.icon} alt={item?.name} width={50} height={30} />)
                        }

                    </div>
                </div>
                <div className='w-[30%]'>
                    <h2 className='font-bold text-lg text-white'> Connect with Nurtaj</h2>
                    <div className="flex text-5xl pt-3 gap-4 ">
                        {
                            socialLinks?.map((item, idx) => <Link  key={idx} href={item?.href} >{item.icon}</Link>)
                        }

                       
                    </div>
                </div>
            </div>

            <p className="text-center text-gray-200 text-sm border-white border-t pt-5 mt-10">© 2025 Nurtaj. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
