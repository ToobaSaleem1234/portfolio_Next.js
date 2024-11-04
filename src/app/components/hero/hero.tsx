'use client'
import React from 'react'
import './hero.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';



const hero = () => {
    return (
        <div id='hero'>
            <div id='left'>
                <h1>I am </h1>
                <br />
                <div id='typing'>
                    <Typewriter
                        options={{
                            strings: [
                                'Tooba Saleem',
                                'Web Developer',
                                'UI/UX Designer',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <hr />
                <p>
                    As a working professional in future I am learning web development from GIAIC.My aim is to become a very good web Developer. For this i polish my learning skills with GIAIC and enhance my future.Outside of work i really enjoyed hosting feasts,driving and learning different creative courses.
                    <br />
                    <br />
                    <span>You can View my complete Resume here:</span>  
                </p>
                <br />
                <Link id='resume' href={"https://vercel.com/tooba-saleems-projects/milestone1-2"} target='_blank'>
                    View Resume
                </Link>
            </div>
            <div id="right">
                <Image src='/tooba.jpg' width={250} height={300} alt='profile'>
                </Image>
            </div>
        </div>
    )
}

export default hero