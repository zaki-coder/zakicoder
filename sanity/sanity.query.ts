import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
    return client.fetch(
        groq`*[_type == "profile"]{
            _id,
            fullName,
            headline,
            profileImage {alt, "image": asset->url},
            shortBio,
            location,
            fullBio,
            email,
            "resumeURL": resumeURL.asset->url,
            socialLinks,
            skills
        }`
    );
}

export async function getJob() {
    return client.fetch(
        groq`*[_type == "job"] | order(startDate desc){
            _id,
            name,
            jobTitle,
            "logo": logo.asset->url,
            url,
            description,
            startDate,
            endDate
        }`,
        {
            next: {
                revalidate: 120
            }
        }
    );
}

export async function getProjects() {
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            name,
            "slug": slug.current,
            tagline,
            "logo": logo.asset->url,
        }`
    );
}

export async function getProject(slug: string) {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            name,
            projectURL,
            coverImage {alt, "image": asset->url },
            tagline,
            description
        }`,
        { slug }
    );
}
