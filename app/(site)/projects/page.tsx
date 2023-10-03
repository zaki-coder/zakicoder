
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import Logo from "../icons/coding.png";


export default async function Project() {
    const projects: ProjectType[] = await getProjects();

    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6">
            <section className="max-w-2xl mb-16">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
                    Featured projects I&apos;ve built over the years
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed">
                    Throughout the years, I've been involved in numerous small projects, and these are the ones that hold a special place in my heart. A good portion of them is open-source, so if you come across something that catches your attention, don't hesitate to explore the code and consider contributing if you have suggestions for enhancements.
                </p>
            </section>

            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
                {projects.map((project) => (
                    <Link href={`/projects/${project.slug}`} key={project._id} className="flex items-start gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out">
                        <Image src={project.logo || Logo} width={60} height={60} className="bg-zinc-800 rounded-md p-2" />
                        <div>
                            <h2 className="font-semibold mb-1">{project.name}</h2>
                            <div className="text-sm text-zinc-400">{project.tagline}</div>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}