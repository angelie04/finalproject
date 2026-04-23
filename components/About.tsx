import styled from "styled-components";

const Section = styled.section`
    margin: 0 auto;
    max-width: 1100px;
    padding: 32px 24px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
`;

const Card = styled.div`
    height: 100%;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

    figure {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background-color: #f4f4f5;
    }

    img {
        width: 176px;
        height: 176px;
        border-radius: 999px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        object-fit: cover;
        object-position: top;
    }

    div {
        padding: 16px;
        text-align: center;
    }

    h2 {
        margin: 0 0 8px;
    }

    p {
        margin: 0;
    }
`;

const teamMembers = [
    /* Array to hold info for each team member */
    {
        name: "Angelie Darbouze",
        image: "/static/angelie.jpg",
        about: "I built reusable components & a shared layout to structure this app " +
            "(ie. Navbar, footer, and base layout across pages)!",
    },
    {
        name: "Michael Chu",
        image: "/static/michael.jpg",
        about: "I created the About page and the download image function",
    },
    {
        name: "Chelsea Nnanyanzi",
        image: "/static/chelsea.png",
        about: "temp",
    },
    {
        name: "George Audi",
        image: "/static/george.jpg",
        about: "temp",
    },
];

export default function About() {
    return (
        <Section>
            <Grid>
                {teamMembers.map((member) => (
                    <Card key={member.name}>
                        <figure>
                            <img src={member.image} alt={member.name} />
                        </figure>
                        <div>
                            <h2>{member.name}</h2>
                            <p>{member.about}</p>
                        </div>
                    </Card>
                ))}
            </Grid>
        </Section>
    );
}