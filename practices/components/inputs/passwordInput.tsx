'use client';

import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideEye, LucideEyeOff, LucideFile, LucideFileWarning, LucideLoader } from "lucide-react";
import { IInput } from "./type";
import { useState } from "react";


export const PassWordInput= ({ 
  className,
  description,
  leftSymbol,
  rightSymbol,
  isFullWidth,
  isDisable=false,
  required=false,
  isLoading=false,
  error=null,
  isSuccess=false,
  showStatus=true,
  ...rest }:IInput) => {
  const [eye,setOpen]=useState(true)
  const [value,setValue]=useState("")
  
  const inputStyle=twMerge(
    " mb-1 flex items-center bg-grey-20 text-grey-70 rounded-xl focus-within:border-2 focus-within:border-mint-300",
    error&&" border-2 border-error-600",
    isLoading&&" cursor-not-allowed ",
    isSuccess&&" border-2 border-success-600 ",
  )
 

 
  
 
  return (
    <div className={className}>
      <h3 className="text-white text-1em"> {description} </h3>
      <div className={inputStyle}>
        {leftSymbol }
        <input {...rest} 
          type={eye ? "text":"password"} className="pl-2 bg-inherit outline-none w-12em rounded-lg text-1em p-0.2em"
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
        />
        {value.length>0 &&<button className="font-bold" onClick={(e)=>{setValue('')}}>X</button>}
        {eye && <button onClick={()=>setOpen(false)}> <LucideEye className="w-1.5em h-1.5em" cursor={"pointer"}/></button>}
        {!eye && <button onClick={()=>setOpen(true)}> <LucideEyeOff className="w-1.5em h-1.5em" cursor={"pointer"}/></button>}    
      </div>
      {showStatus && (
        <>
            {
            (!isLoading && error===null && !isSuccess) &&
            <div className={twMerge("flex gap-1 text-white items-center")}>
                <LucideFile className="w-1em h-1em"/> <span className="p-0 text-1em">hint</span>
            </div>
            }
            {
              error &&
              <div className={twMerge("flex gap-1 text-error-600 items-center")}>
                  <LucideFileWarning className="w-1em h-1em"/> <span className="text-1em ">{error}</span>
              </div>
            }
            {
              isLoading &&
              <div className={twMerge("flex gap-1 text-white items-center")}>
                  <SpinnerIcon className="w-1em h-1em"/> <span className="p-0 text-1em">Loading...</span>
              </div>
            }
   
            {
              isSuccess &&
              <div className={twMerge("flex gap-1 text-white","text-success-600 items-center")}>
                  <LucideCheck className="w-1em h-1em"/> <span className="p-0 text-1em">Success</span>
              </div>
            }
        </>
      )}
     
    
    
    </div>
    )
  };
