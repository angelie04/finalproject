//created by Chelsea Nnanyanzi
// This page fetches data from the API endpoint and sends it to the Child Component
"use client";
import useSWR from "swr";
import MemeGallery from "@/components/MemeGallery";






//initializing the function MemeGalleryPage
export default function MemeGalleryPage() {


    //a data object that the useSWR hook fetches data for
    // the useSWR hook makes API calling more efficient
    //it calls the API endpoint in the route.ts file
    const {data, error} = useSWR(`/api/getMemeData`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );



    // Handle error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    //data is saved in an array to allow for mapping
    //data.data.memes saves just the memes from the API
    const results = data.data.memes || [];


    return (
        // the meme data is passed to the Child Component MemeGallery
        <MemeGallery memes={results}/>
    );
}