"use client";
// Component responsible for: George Audi
// Purpose: Displays a random meme (name + image) on the home page. Clicking "Generate Meme" picks a new random meme from the fetched list.
 
import { useState, useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";
import { Meme } from "@/app/types/meme";
 
 
// centers the meme card and button on the page
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;
 
// card that wraps the meme name and image
const MemeCard = styled.div`
    background-color: #ffffff;
    border: 4px solid #e1514c;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    text-align: center;
`;
 
// meme name displayed above the image
const MemeName = styled.h2`
    font-size: calc(14px + 0.5vw);
    margin: 12px;
`;
 
// meme image
const MemeImage = styled.img`
    width: 100%;
    display: block;
`;
 
// the generate button
const GenerateButton = styled.button`
    font-size: calc(13px + 0.3vw);
    padding: 10px 28px;
    border: 2px solid #e1514c;
    border-radius: 999px;
    background-color: #e1514c;
    color: #ffffff;
`;
 

const fetcher = (url: string) =>
    fetch(url).then((res) => res.json());
 
export default function RandomMeme() {
 
    // holds the meme being displayed
    const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);
 
    const { data, error } = useSWR("/api/getMemeData", fetcher);
 
    // gets a random meme from the list and sets it as the current meme
    const pickRandom = (memes: Meme[]) => {
        const randomIndex = Math.floor(Math.random() * memes.length);
        setCurrentMeme(memes[randomIndex]);
    };
 
    // auto-picks a random meme once the data loads
    useEffect(() => {
        if (data?.data?.memes) {
            pickRandom(data.data.memes);
        }
    }, [data]);
 
    if (error) return <p>Failed to load memes.</p>;
    if (!data || !currentMeme) return <p>Loading...</p>;
 
    const memes: Meme[] = data.data.memes || [];
 
    return (
        <Wrapper>
            <MemeCard>
                <MemeName>{currentMeme.name}</MemeName>
                <MemeImage
                    src={currentMeme.url}
                    alt={`Meme template: ${currentMeme.name}`}
                />
            </MemeCard>
 
            {/* picks a new random meme */}
            <GenerateButton onClick={() => pickRandom(memes)}>
                Generate Meme
            </GenerateButton>
        </Wrapper>
    );
}
