import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";


type Opportunity = {
    Id:number;
    UserId:number;
    Name:string;
    Company: string;
    Description:string;
    Type: string;
    Location: typeof OPPORTUNITY_CATEGORIES[number][];
    ApplicationDeadline: Date | null;
    EducationLevel: typeof OPPORTUNITY_EDUCATION_LEVELS[number][];
    GradeLevel: number[];
    Tags: typeof OPPORTUNITY_CATEGORIES[number][];
}

type User = {
    "Id":number;    
    "FirstName":string;
    "LastName":string;
    "SavedOpps":number[];
    "Username":string;
    "Password":string;
    "Picture":string;
}

//"Internship" | "Program" | "Scholarship" | "Competition" | "Award" | "Fellowship" | "Club"