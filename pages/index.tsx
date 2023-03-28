import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })
import { MainHeader } from '../components/common/MainHeader';
import { Hero } from '../components/home/Hero';

export default function Home() {
    return (
        <React.Fragment>
            <MainHeader title="AI Search : Home" />
            <section className="bg-slate-100 dark:bg-slate-700 h-full w-full pt-32"> 
                <Hero 
                    title="Search AI Tools" 
                    subtitle="Search AI tools for whatever your needs. Simply type in a function like 'music' or 'image editing'. We aim to build the most complete list of AI tools on the market. Stay tuned for more features!" 
                />
            </section>
        </React.Fragment>
    )
}
    