import styled from "styled-components";
import { Meme } from "@/app/types/meme";

const DownloadButton = styled.button`
    font-size: calc(13px + 0.3vw);
    padding: 10px 28px;
    border: 2px solid #e1514c;
    border-radius: 999px;
    background-color: #e1514c;
    color: #ffffff;
`;

export default function DownloadMemeButton({ meme }: { meme: Meme }) {
    const handleDownload = async () => {
        const filename = `${meme.name}.jpg`;
        try {
            const response = await fetch(meme.url);
            if (!response.ok) 
                return;
            const blob = await response.blob();
            // Create temp local URL that points to that blob (images and other files)
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

