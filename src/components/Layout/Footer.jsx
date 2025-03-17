'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaSquareTwitter } from 'react-icons/fa6';


const Footer = () => {

    const Icon = ({ src, iconWidth = "20px" }) => (
        <Image
            src={src}
            alt="logo"
            priority
            width={500}
            height={500}
            //   className={`w-[${iconWidth}] h-auto`}
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
                        <li><Link href="#">About Nurtaj</Link></li>
                        <li><Link href="#">Affiliate & Influencer: Earn Commission</Link></li>
                        <li><Link href="#">Contact us</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Press</Link></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Customer service</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link href="#">Return and refund policy</Link></li>
                        <li><Link href="#">Intellectual property policy</Link></li>
                        <li><Link href="#">Shipping info</Link></li>
                        <li><Link href="#">Your Recalls and Product Safety Alerts</Link></li>
                        <li><Link href="#">Report suspicious activity</Link></li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link href="#">Support center & FAQ</Link></li>
                        <li><Link href="#">Safety center</Link></li>
                        <li><Link href="#">Nurtaj</Link></li>
                        <li><Link href="#">Sitemap</Link></li>
                        <li><Link href="#">How to order</Link></li>
                        <li><Link href="#">How to track</Link></li>
                        <li><Link href="#">Partner with Nurtaj</Link></li>
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
                            <div className='flex text-sm mt-4 gap-2 items-center '>
                                <Icon src={"/icons/price-drop.svg"} />
                                <p>Price-drop alerts</p>
                            </div>
                            <div className='flex text-sm mt-4 gap-2 items-center '>
                                <Icon src={"/icons/delivery-white.svg"} />
                                <p>Price-drop alerts</p>
                            </div>
                            <div className='flex text-sm mt-4 gap-2 items-center '>
                                <Icon src={"/icons/tikmark.svg"} />
                                <p>Price-drop alerts</p>
                            </div>
                            <div className='flex text-sm mt-4 gap-2 items-center '>
                                <Icon src={"/icons/countdown.svg"} iconWidth={"15px"} />
                                <p>Price-drop alerts</p>
                            </div>
                            <div className='flex text-sm mt-4 gap-2 items-center '>
                                <Icon src={"/icons/exclusive-offer.svg"} />
                                <p>Price-drop alerts</p>
                            </div>
                            <div className='flex text-sm mt-4 gap-2 items-center '>
                                <Icon src={"/icons/coupon&offer.svg"} />
                                <p>Price-drop alerts</p>
                            </div>
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
                        <Image src={`/images/Footer/bkash.png`} alt={"bkash"} width={50} height={30} />
                        <Image src={`/images/Footer/mastercard.png`} alt={"mastercard"} width={50} height={30} />

                        <Image src={`/images/Footer/qcash.png`} alt={"qcash"} width={50} height={30} />
                        <Image src={`/images/Footer/upay.png`} alt={"upay"} width={50} height={30} />
                        <Image src={`/images/Footer/visa.png`} alt={"visa"} width={50} height={30} />
                        <Image src={`/images/Footer/americanexpress.svg`} alt={"American express"} width={50} height={30} />

                    </div>
                </div>
                <div className='w-[30%]'>
                    <h2 className='font-bold text-lg text-white'> Connect with Nurtaj</h2>
                    <div className="flex text-5xl pt-3 gap-4 ">
                        <Link href="#"><FaFacebookSquare /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><TfiYoutube /></Link>
                        <Link href="#"><FaSquareTwitter /></Link>
                    </div>
                </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-5">© 2025 Nurtaj. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
