import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })
import { MainHeader } from '../components/common/MainHeader';
import { Hero } from '../components/home/Hero';
import { SearchBar } from '../components/home/SearchBar';
import { Category } from '../components/home/Category';
import { Footer } from '../components/home/Footer';
import prisma from '../util/db.ts'
import { CategoryType } from '../types/types';

export async function getServerSideProps(){
    const categorys = await prisma.Category.findMany({
        orderBy: {
            CategoryName: 'asc',
        },
    });
    const formatedCategory = categorys.map((category)=>({
        category_id:category.category_id,
        CategoryName:category.CategoryName
    }))
    return { 
        props: {
            categorys:formatedCategory,
        } 
    }
}

export default function Home({categorys} : { categorys : CategoryType[] }) {

    return (
        <React.Fragment>
            <MainHeader title="AI Search : Home" />
            <section className="bg-slate-100 dark:bg-slate-700 h-full w-full pt-32"> 
                <Hero 
                    title="Search AI Tools" 
                    subtitle="Search AI tools for whatever your needs. Simply type in a function like 'music' or 'image editing'. We aim to build the most complete list of AI tools on the market. Stay tuned for more features!" 
                />
                <SearchBar />
                <Category categorys={categorys} />
                <Footer />
            </section>
        </React.Fragment>
    )
}
    