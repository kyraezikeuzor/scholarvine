import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

type Opportunity = {
    Name:string,
    Company: string,
    Description:string,
    Type: "Internship" | "Program" | "Scholarship" | "Competition" | "Challenge" | "Award" | "Fellowship" | "Club" | "Job" | "Other",
    Location: ("USA" | "Global/Worldwide" | "Alaska" | "Arizona" | "Arkansas" | "California" | "Colorado" | "Connecticut" | "Delaware" | "Florida" | "Georgia" | "Hawaii" | "Idaho" | "Illinois" | "Indiana" | "Iowa" | "Kansas" | "Kentucky" | "Louisiana" | "Maine" | "Maryland" | "Massachusetts" | "Michigan" | "Minnesota" | "Mississippi" | "Missouri" | "Montana" | "Nebraska" | "Nevada" | "New Hampshire" | "New Jersey" | "New Mexico" | "New York" |"North Carolina" | "North Dakota" | "Ohio" | "Oklahoma" | "Oregon" | "Pennsylvania" | "Rhode Island" | "South Carolina" | "South Dakota" | "Tennessee" | "Texas" | "Utah" | "Vermont" | "Virginia" | "Washington" | "West Virginia" | "Wisconsin" | "Wyoming")[]
    ApplicationDeadline: Date | null;
    EducationLevelRequired: ("High School" | "Undergraduate" | "Graduate" | null)[],
    GradeLevelsofRequiredEducationLevel: (number | number[])[],
    Tags:   
    ("Service"
    | "Leadership"
    | "Health"
    | "Medicine"
    | "Law"
    | "Engineering"
    | "Technology"
    | "Art"
    | "Fashion"
    | "Writing"
    | "Culture"
    | "Science"
    | "Research"
    | "Athletics"
    | "Business"
    | "Finance"
    | "Entrepreneurship"
    | "Philosophy"
    | "Literature"
    | "Music"
    | "History"
    | "Entertainment"
    | "Education"
    | "Social Science"
    | "Software Engineering"
    | "Product Management"
    | "UX/UI Design"
    | "Data Science"
    | "Aerospace"
    | "Architecture"
    | "Artificial Intelligence"
    | "Biotechnology"
    | "Creative Writing"
    | "Cybersecurity"
    | "Digital Arts & Design"
    | "Environmental Science"
    | "Fashion Management"
    | "Film Production"
    | "Forensic Science"
    | "Game Design"
    | "Government"
    | "Journalism"
    | "Law & Advocacy"
    | "Marine Biology"
    | "Medicine & Health Care"
    | "Music Industry & Production"
    | "Neuroscience"
    | "Nursing"
    | "Political Action"
    | "Public Policy"
    | "Psychology"
    | "Sports Management"
    | "Theater"
    | "Veterinary Medicine")[];
    Environment: "In-Person" | "Remote" | "Hybrid"
    DateCreated: Date,
    UsedforGeneration: boolean
}
