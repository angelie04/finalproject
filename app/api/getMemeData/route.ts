
import {NextResponse} from "next/server";


export const dynamic = "force-dynamic";



export async function GET(request:Request): Promise<NextResponse>{




    const res = await fetch(
        `https://api.imgflip.com/get_memes`


    );


    if(res.status !== 200){
        return NextResponse.json({error: "Failed to fetch data"}, {status:500});
    }

    // Parse the JSON data from the API response
    const data = await res.json();

    // Return the parsed data in the response as JSON
    return NextResponse.json(data);
}