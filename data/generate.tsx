import axios from 'axios'

/*
#https://www.google.com/about/careers/applications/jobs/results/?src=Online/Google%20Website/ByF&utm_source=Online%20&utm_medium=careers_site%20&utm_campaign=ByF&company=Fitbit&company=Google&company=YouTube&distance=50&employment_type=INTERN
#https://jobs.apple.com/en-us/search?sort=relevance
#https://www.glassdoor.com/Job/houston-engineer-internship-jobs-SRCH_IL.0,7_IC1140171_KO8,27.htm
#https://www.gradcracker.com/search/all-disciplines/engineering-work-placements-internships
#https://seas.harvard.edu/office-student-career-development/resources-undergraduate-students/undergraduate-internships
#https://www.nslcleaders.org/youth-leadership-programs/summer-medical-programs/
#https://precollegeprograms.org/article/medical-summer-programs-for-high-school-students
#https://scholarships360.org/college-admissions/medical-internships-for-high-school-students/
*/

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

const Type = ["Internship", "Program", "Scholarship", "Competition", "Challenge", "Award",  "Fellowship", "Club", "Job", "Other"]


/*
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


*/