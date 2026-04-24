//created by Chelsea Nnanyanzi
// this file contains the component that renders and displays the API
// data as an individual meme
import {Meme} from "@/app/types/meme";
import styled from "styled-components";


//custom in file component styling with styled-components
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

//a meme prop is passed from the MemeCard function to the MemePage child component
export default function MemePage(props: {meme:Meme}) {
    return (

        <MemeDiv>
            {/*use curly brackets and the meme JSON's key to access and
                        display the values of the name and image*/}
            <MemeText>{props.meme.name}</MemeText>
            <figure>
                <MemeImg src={props.meme.url} alt={`meme about ${props.meme.name}`}/>
            </figure>

        </MemeDiv>



    );
}

