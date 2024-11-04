import React from 'react'
import Image from 'next/image'
import "./style.css";
import Link from 'next/link';
import { IoMdCloudDownload } from 'react-icons/io';
const Header = () => {
    return (
        <div id='main'>
            <div id="logo">
                <Image src='/logo.jpg' width={30} height={30} alt='logo'></Image>
            </div>
            <div id='name'>
                <h1>TS INSTITUTE</h1>
            </div>
            <div id='navbar'>
                <Link href={'/'} target='_blank'>Home</Link>
                <Link href={'#about'} target='_blank'>About</Link>
                <Link href={'#skills'} target='_blank'>Skills</Link>
                <Link href={'#projects'} target='_blank'>Projects</Link>
                <Link href={'#contact'} target='_blank'>Contact</Link>
            </div>
            <div id="button">
                <button>
                    Download CV
                </button>
            </div>
            <div id='icon'>
            <IoMdCloudDownload size={40} />
            </div>
        </div>
    )
}

export default Header