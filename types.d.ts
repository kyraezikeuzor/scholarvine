import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";


type Opportunity = {
    Id:number;
    UserId:number;
    Name:string;
    Company: string;
    Description:string;
    Type: string;
    Location: string[];
    ApplicationDeadline: Date | null;
    EducationLevel: string[];
    GradeLevel: number[];
    Tags: string[];
}

type User = {
    Id:number;    
    FirstName:string;
    LastName:string;
    SavedOpps:number[];
    "PostedOpps":number[];
    Username:string;
    Password:string;
    Picture:string;
}

//"Internship" | "Program" | "Scholarship" | "Competition" | "Award" | "Fellowship" | "Club"