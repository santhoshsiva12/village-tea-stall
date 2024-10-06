"use client"
import { useSelector } from "react-redux"
import FooterItems from "./FooterItems"
import logo from '@/app/public/logo.jpeg'
import Image from 'next/image'

const Footer = () => {
    const products = useSelector((state) => state.productData.products)
    return (
        <div>
            <div className="flex justify-between w-full">
                <div className="w-[50px]">
                    <Image
                        src={logo}
                        alt={"village tea stall logo"}
                        placeholder="blur"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex gap-4 w-full">
                    <ul>
                        <FooterItems products={products} category="Hot drings" />
                    </ul>
                    <ul>
                        <FooterItems products={products} category="Cool drings" />
                    </ul>
                    <ul>
                        <FooterItems products={products} category="Biscuits" />
                    </ul>
                    <ul>
                        <FooterItems products={products} category="Cookies" />
                    </ul>
                    <ul>
                        <FooterItems products={products} category="Other Snacks" />
                    </ul>
                    <ul>
                        <FooterItems products={products} category="Cigarette Filters" />
                    </ul>
                </div>
                <div>
                </div>
            </div>
            <p className="text-white"><span>© 2022</span>
                <span>Village Tea Stall</span>
                <span>All Rights Reserved</span>
            </p>
        </div>
    )
}

export default Footer