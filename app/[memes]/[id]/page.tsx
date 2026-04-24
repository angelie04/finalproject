//created by Chelsea Nnanyanzi
// This page sends individual meme data to the MemePage component
// by finding the meme that matches the id provided in the route
"use client"; //allows us to use useSWR since it does not run in the server
import MemePage from "@/components/MemePage";
import useSWR from "swr";
import {useParams} from "next/navigation";



export default function MemeCard() {
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
    //useParams grabs the parameter from the route, in this case it grabs the id
    const mid = useParams().id;
    //.find() goes through an array and finds the first element
    //that matches the condition
    // here I am matching the memes in the array by id
    const meme = results.find((r: { id: string; }) => r.id == mid );
    return (
        <MemePage meme={meme} />
    );
}

