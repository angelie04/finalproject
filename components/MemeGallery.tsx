//dummy code rn

import {Meme} from "@/app/types/meme";
import styled from "styled-components";

const AllMemesDiv=styled.div`
    display: grid;
    grid-template-columns: 20vw 20vw 20vw 20vw;
    
    align-self: center;
    justify-self: center;
   
    
    align-content: center;
    
  
   
    width: 80vw;
`;

const MemeImg = styled.img`
    width: 100%;
    
    

`
const MemeDiv = styled.div`
    text-align: center;
    border: 8px ridge red;
    align-content: center;
 
   background-color: white;

`
const MemeText = styled.h1`
    font-size: calc(15px + 0.5vw);
`


export default function MemeGallery(props:{memes:Meme[]}) {
    return (
        <AllMemesDiv>
            {
                props.memes.map((meme:Meme) =>
                <MemeDiv key={meme.id}>
                    <MemeText>{meme.name}</MemeText>
                    <MemeImg src={meme.url} alt={`meme about ${meme.name}`}/>

                </MemeDiv>)
            }
        </AllMemesDiv>
    );
}

