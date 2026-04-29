//created by Michael Chu
// this file contains the download meme button component that allows the user to download the meme to the system as jpg file

import styled from "styled-components";
import { Meme } from "@/app/types/meme";

const DownloadButton = styled.button`
    font-size: calc(13px + 0.3vw);
    padding: 10px 28px;
    border: 2px solid #e1514c;
    border-radius: 999px;
    background-color: #e1514c;
    color: #ffffff;
    font-family: 'Anton', Impact, sans-serif;
    &:hover {
        background-color: rgb(255, 255, 255);
        color: #e1514c;
    }
`;

export default function DownloadMemeButton({ meme }: { meme: Meme }) {
    const handleDownload = async () => {
        const filename = `${meme.name}.jpg`;
        try {
            const response = await fetch(meme.url);
            if (!response.ok) 
                return;
            //create blob from response so we can avoid opening a new tab to download the image
            const blob = await response.blob();
            // Create temp local URL that points to blob
            // this is so we don't open a new tab to download the image
            const objectUrl = URL.createObjectURL(blob);
            // create temp anchor tag to trigger browser download.
            const link = document.createElement("a");
            link.href = objectUrl;
            link.download = filename;
            // Add anchor click it to download
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch {
            console.error("Error: Failed to download meme");
        }
    };

    return (
        <DownloadButton onClick={handleDownload} disabled={!meme}>
            Download Meme
        </DownloadButton>
    );
}

