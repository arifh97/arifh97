import React from 'react'
import Social from './social'
import { BsWhatsapp } from 'react-icons/bs'
import { FaTelegramPlane } from "react-icons/fa";


export default function Footer() {
    const social = [
        {
            name: 'WhatsApp',
            path: 'http://wa.me/+8801918599939',
            icon: <BsWhatsapp />
        },
        {
            name: 'Telegram',
            path: 'https://t.me/arifh997',
            icon: <FaTelegramPlane />
        },
    ]
    return (
        <div className="container mx-auto">
            <div className="py-5 lg:py-6 border-t border-border text-center">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
                    <span>© {new Date().getFullYear()} Arif. All rights reserved.</span>
                    <div className="flex items-center gap-x-3">
                        {social.map((item, idx) => (
                            <a href={item.path} key={idx} target='_blank' title={item.name} className='flex items-center justify-center rounded-lg size-10 text-lg bg-[#353839] text-white hover:bg-accent transition-all duration-300'>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
