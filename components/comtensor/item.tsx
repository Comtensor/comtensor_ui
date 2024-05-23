"use client"

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ComtensorItemType = {
    netuid: number;
    image: StaticImport | string;
    creator: string;
    name: string;
    url: string;
    description: string;
    badge : string,
    badgeColor : string,
}


const ComtensorItem = ({ creator, netuid, image, name, url, description,  badge, badgeColor }:ComtensorItemType) => {


    return (
        <div className="border-[1px] border-[#f2f2f2] text-[#f2f2f2] rounded-[20px] w-[280px] bg-[#1f2330]
                cursor-pointer duration-300 transition-all hover:opacity-75 hover:border-primary ">
            <div className="relative space-y-2 rounded-lg  transition-all duration-150 ease-out overflow-hidden">
                <a className="relative aspect-[3/2] flex rounded-t-lg w-full bg-white/5 overflow-hidden" href={`${url}`}>
                    <Image alt={name} width={450} height={300} src={image} className="rounded-t-[20px] object-cover"/>
                </a>
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-3 items-center ">
                            <h3 className="font-medium  text-[#f3f3f3]">{name}</h3><span className="text-primary">#{netuid}</span>
                        </div>
                    </div>
                    <p className="mt-2 min-h-[60px] text-xs md:text-sm text-white opacity-70 overflow-hidden line-clamp-3">
                        {description}
                    </p>
                    <div className="mt-1 flex justify-end gap-1.5 text-[#DfEAED] text-xs">by: <span className="text-primary">{creator}</span></div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs text-white border border-green-300`} style={{ backgroundColor: badgeColor }}>
                    {badge}
                </div>
            </div>
        </div>
        
    )
}


export default ComtensorItem;