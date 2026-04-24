//created by Chelsea Nnanyanzi
// this file contains the component that renders and displays the API data
// in a gallery style format
import {Meme} from "@/app/types/meme";
import styled from "styled-components";
import Link from 'next/link'

//custom in file component styling with styled-components
const AllMemesDiv=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    
    margin: 0 auto;
   
    
`;

const MemeImg = styled.img`
    width: 100%;
    object-position: bottom;
    object-fit: cover;
    
    

`
const MemeDiv = styled.div`
    height: 100%;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1);
    
 
   
    figure {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background-color: #f4f4f5;
    }

`
const MemeText = styled.h1`
    font-size: calc(20px + 1.5vw);
`

//meme props are passed from the MemeGalleryPage function to the MemeGallery child component
export default function MemeGallery(props:{memes:Meme[]}) {
    return (

        <AllMemesDiv>
            {
                //memes are received from and are mapped to their unique ids
                props.memes.map((meme:Meme) => (
                    <Link href={`/memes/${meme.id}`}  key={meme.id}>

                    <MemeDiv>

                        {/*use curly brackets and the meme JSON's key to access and
                        display the values of the name and image*/}
                        <MemeText>{meme.name}</MemeText>
                        <figure>
                        <MemeImg src={meme.url} alt={`meme about ${meme.name}`}/>
                        </figure>

                    </MemeDiv>
                    </Link>
                ))
            }
        </AllMemesDiv>



    );
}

