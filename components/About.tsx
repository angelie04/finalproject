export default function About() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12">
            {/* DaisyUI card component for displaying each team member */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
                <details className="dropdown w-full">
                    <summary className="list-none cursor-pointer">
                        <div className="card h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                            <figure className="flex justify-center border-b border-black/10 bg-zinc-100 p-4">
                                <img
                                    src="/static/angelie.jpg"
                                    alt="Angelie Darbouze"
                                    className="h-44 w-44 rounded-full border border-black/10 object-cover object-top"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Angelie Darbouze</h2>
                                <p>temp</p>
                            </div>
                        </div>
                    </summary>
                    <ul className="dropdown-content menu z-10 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow">
                        <li>
                            <a href="#" className="flex items-center gap-2">
                                <img src="/static/github.png" alt="GitHub" className="h-4 w-4" />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2">
                                <img src="/static/linkedin.png" alt="LinkedIn" className="h-4 w-4" />
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </details>

                <details className="dropdown w-full">
                    <summary className="list-none cursor-pointer">
                        <div className="card h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                            <figure className="flex justify-center border-b border-black/10 bg-zinc-100 p-4">
                                <img
                                    src="/static/michael.jpg"
                                    alt="Michael Chu"
                                    className="h-44 w-44 rounded-full border border-black/10 object-cover object-top"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Michael Chu</h2>
                                <p>I created the About page and the download image function</p>
                            </div>
                        </div>
                    </summary>
                    <ul className="dropdown-content menu z-10 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow">
                        <li>
                            <a href="https://github.com/mchu64" className="flex items-center gap-2">
                                <img src="/static/github.png" alt="GitHub" className="h-4 w-4" />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/michael-y-chu/" className="flex items-center gap-2">
                                <img src="/static/linkedin.png" alt="LinkedIn" className="h-4 w-4" />
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </details>

                <details className="dropdown w-full">
                    <summary className="list-none cursor-pointer">
                        <div className="card h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                            <figure className="flex justify-center border-b border-black/10 bg-zinc-100 p-4">
                                <img
                                    src="/static/chelsea.jpg"
                                    alt="Chelsea Nnanyanzi"
                                    className="h-44 w-44 rounded-full border border-black/10 object-cover object-top"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Chelsea Nnanyanzi</h2>
                                <p>temp</p>
                            </div>
                        </div>
                    </summary>
                    <ul className="dropdown-content menu z-10 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow">
                        <li>
                            <a href="#" className="flex items-center gap-2">
                                <img src="/static/github.png" alt="GitHub" className="h-4 w-4" />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                <img src="/static/linkedin.png" alt="LinkedIn" className="h-4 w-4" />
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </details>

                <details className="dropdown w-full">
                    <summary className="list-none cursor-pointer">
                        <div className="card h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                            <figure className="flex justify-center border-b border-black/10 bg-zinc-100 p-4">
                                <img
                                    src="/static/george.jpg"
                                    alt="George Audi"
                                    className="h-44 w-44 rounded-full border border-black/10 object-cover object-top"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">George Audi</h2>
                                <p>temp</p>
                            </div>
                        </div>
                    </summary>
                    <ul className="dropdown-content menu z-10 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow">
                        <li>
                            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                <img src="/static/github.png" alt="GitHub" className="h-4 w-4" />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2">
                                <img src="/static/linkedin.png" alt="LinkedIn" className="h-4 w-4" />
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </details>
            </div>
        </section>
    );
}