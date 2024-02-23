import { Opportunity } from '@/types';

export function capitalizeFirstLetter(text:string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getPath(text:string) {
  let finalString = "/" + text.toLowerCase().replaceAll(" ", "-");
  return finalString;
}

function generateOpportunityId(opportunity: Opportunity): string {
  // Concatenate relevant properties to create a unique string
  const idString = `${opportunity.Name}${opportunity.Company}${opportunity.Type}${opportunity.Description}${opportunity.ApplicationDeadline}${opportunity.GradeLevel.join(',')}`;

  // Generate a hash of the concatenated string using SHA256
  const hash = crypto.createHash('sha256').update(idString).digest('hex');

  // Return the hash as the unique ID
  return hash;
}

export function getPathUndo(text:string) {
    // Remove leading slash
    let trimmedString = text.slice(1);

    // Split the string by hyphens and convert each word to title case
    let words = trimmedString.split("-");
    let titleCaseWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the title case words with spaces
    let reversedString = titleCaseWords.join(" ");
  
    return reversedString;
}


export function getDate(date:any) {
    const d = new Date(date).toLocaleDateString("en-US");
    return d;
  }
  
  export function getBool(bool) {
    return Boolean(bool) == true ? "Yes" : "No";
  }
  
  
  export function handleChange(componentName, setComponent, componentList) {
    for (let i = 0; i < componentList.length; i++) {
      if (componentList[i].name == componentName) {
        return setComponent(componentList[i].component);
      }
    }
  }
  
