import { groq } from "next-sanity";
import React, { cache } from 'react'
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Metadata } from "next";
import { notFound } from 'next/navigation'


type Props = {
  params:{
    slug:string
  }
}

export const revalidate = 60

const getData = cache(async()=>{
  const query = `*[_type=='post' && slug.current == "elevate-your-creativity-discover-adobe-s-top-5-game-changing-features"][0]{
    ...,
    author->,
    categories[]->
  }`;
  const data  = await client.fetch(query)
  return data;
})

const BlogPage = async ({params:{slug}}:Props) => {
  const data:any = await getData()
  return (
    <article className="px-3 antialiased  pt-2 overflow-hidden pb-28 max-w-4xl mx-auto">
         
  <section className="space-x-3 py-8 text-slate-900/95  dark:text-white sm:py-16">
   <h1 className="text-4xl sm:text-5xl mb-10 font-bold">{data.title}</h1>
    <div className="flex flex-row items-center gap-3">
    <Image
      className="rounded-full"
      src={urlFor(data?.author.image).url()}
      alt={data.title}
      width={60}
      height={60}
      priority
    />
    
    <div className="flex flex-col">
      <p className="text-lg font-medium">{data?.author?.name}</p>
      
      <div className="flex gap-2">
        <p>
          {new Date(data._createdAt).toLocaleDateString("en-US", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        |
        <p>3 min read</p>
      </div>
    </div>
  </div>
</section>

        
    <section >
            <div className="overflow-hidden rounded-md">
            <Image
            className=" w-full object-cover hover:scale-105 transition-all duration-300  h-full"
            src={urlFor(data?.mainImage).url()}
            alt={data.title}
            width={1000}
            height={1000}
            priority
            /> 
            </div>   
    </section>
      <PortableText value={data.body} components={RichTextComponents} />
    </article>
  )
}

export default BlogPage