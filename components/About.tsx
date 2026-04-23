export default function About() {
    const teamMembers = [
        {
            name: "Angelie Darbouze",
            image: "/static/angelie.jpg",
            about: "temp",
            github: "#",
            linkedin: "#",
        },
        {
            name: "Michael Chu",
            image: "/static/michael.jpg",
            about: "I created the About page and the download image function",
            github: "https://github.com/mchu64",
            linkedin: "https://www.linkedin.com/in/michael-y-chu/",
        },
        {
            name: "Chelsea Nnanyanzi",
            image: "/static/chelsea.jpg",
            about: "temp",
            github: "#",
            linkedin: "#",
        },
        {
            name: "George Audi",
            image: "/static/george.jpg",
            about: "temp",
            github: "#",
            linkedin: "#",
        },
    ];

    return (
        <section className="mx-auto max-w-6xl px-6 py-12">
            {/* DaisyUI card component for displaying each team member */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
                {teamMembers.map((member) => (
                    <details key={member.name} className="dropdown w-full">
                        {/* using the dropdown summary to display the team member's name and image */}
                        <summary className="list-none cursor-pointer">
                            <div className="card h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                                <figure className="flex justify-center border-b border-black/10 bg-zinc-100 p-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-44 w-44 rounded-full border border-black/10 object-cover object-top"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{member.name}</h2>
                                    <p>{member.about}</p>
                                </div>
                            </div>
                        </summary>
                        <ul className="dropdown-content menu z-10 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow">
                            <li>
                                <a href={member.github} className="flex items-center gap-2">
                                    <img src="/static/github.png" alt="GitHub" className="h-4 w-4" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href={member.linkedin} className="flex items-center gap-2">
                                    <img src="/static/linkedin.png" alt="LinkedIn" className="h-4 w-4" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </details>
                ))}
            </div>
        </section>
    );
}