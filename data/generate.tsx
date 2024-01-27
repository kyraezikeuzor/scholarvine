import axios from 'axios'

const Categories = [
    "Service", "Leadership", "Health", "Medicine", "Law", "Engineering", "Technology", "Arts", "Fashion",
    "Writing", "Culture", "Science", "Research", "Sports", "Athletics", "Business", "Finance", "Entrepreneurship",
    "Philosophy", "Literature", "Music", "History", "Entertainment", "Education", "Social Science",
    "Software Engineering", "Product Management", "UX/UI Design", "Data Science",
    "Aerospace", "Architecture", "Artificial Intelligence", "Biotechnology", "Business & Entrepreneurship",
    "Cybersecurity", "Digital Arts & Design", "Environmental Science & Sustainability", "Fashion Management",
    "Film Production & Scriptwriting", "Forensic Science", "Game Design", "Intelligence & National Security",
    "International Diplomacy", "Journalism", "Law & Advocacy", "Leadership & Service", "Marine Biology",
    "Medicine & Health Care", "Medicine Intensive", "Music Industry & Production", "Nursing",
    "Political Action & Public Policy", "Psychology & Neuroscience", "Sports Management", "Theater",
    "Veterinary Medicine", "Other"]

const GradeLevelsofRequiredEducationLevel = ["Freshman", "Sophomore","Junior","Senior","All"]

const Type = ["Internship", "Program", "Scholarship", "Competition", "Challenge" "Award",  "Fellowship", "Club", "Job", "Other"]



function GenerateOpps(link:string) {
    const config = {
        headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
        }
    }
    const chat = [
        {
            role: "system",
            content: "You are a helpful assistant"
        }
    ]
}

/*
*/