//created by Chelsea Nnanyanzi
//this file is where the API is called and the data is sent to the frontend
import {NextResponse} from "next/server";

//forces the server components to be rerendered on every request
export const dynamic = "force-dynamic";


//since fetch is async, a promise is used to represent that data will eventually be returned
export async function GET(): Promise<NextResponse>{
    //the api gets called
    // since it is for the gallery page no extra queries are needed in the url
    const res = await fetch(
        `https://api.imgflip.com/get_memes`
    );

    // if the call fails then return a 500 status error
    if(res.status !== 200){
        return NextResponse.json({error: "Failed to fetch data"}, {status:500});
    }

    // Parse the JSON data from the API response
    const data = await res.json();

    // send the parsed data in the response as JSON to the frontend
    return NextResponse.json(data);
}