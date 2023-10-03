import { BiBriefcase } from "react-icons/bi";

const job = {
    name: "job",
    title: "Job",
    type: "document",
    icon: BiBriefcase,
    fields: [
        {
            name: "name",
            title: "Company Name",
            type: "string",
            description: "What is the name of the company?",
        },
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
            description: "Enter the job title. E.g: Software Developer",
        },
        {
            name: "logo",
            title: "Company Logo",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "url",
            title: "Company Website",
            type: "url",
        },
        {
            name: "description",
            title: "Job Description",
            type: "text",
            rows: 3,
            description: "Enter a short description of the job",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
        },
    ],
};

export default job;