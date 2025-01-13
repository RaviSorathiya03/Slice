import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getMonths = (month: number)=>{
  const months:string[] = [
    "January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", 
    "November", "December"
  ];

  if(month<1 || month>12){
    return "Invalid month please select the proper month to make this automaiton valid "
  }

  return months[month-1]
}
