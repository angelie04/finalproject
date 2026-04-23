"use client";

import {useParams} from "next/navigation";

import useSWR from "swr";


import {Meme} from "@/app/types/meme";
import MemeGallery from "@/components/MemeGallery";







export default function MemeGalleryPage() {

    const params = useParams();


    const {data, error} = useSWR(`/api/getMemeData`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );
    console.log("API DATA:", data);


    // Handle error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;


    const results = data.data.memes || [];


    return (
        <MemeGallery memes={results}/>
    );
}