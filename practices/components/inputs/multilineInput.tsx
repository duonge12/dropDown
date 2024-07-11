'use client';
import { ChangeEvent, ChangeEventHandler, EventHandler, ReactNode, forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFile, LucideFileWarning, LucideLoader, Rows } from "lucide-react";


import { MultilineInputProps } from "./type";


export const MultilineInput= ({ 
  className,
  description,
  hasTopCounter,
  hasBottomCounter,
  isFullWidth,
  isDisable=false,
  required=false,
  isLoading=false,
  error=null,
  isSuccess,
  maxLength,
  showStatus=true,
  ...props }:MultilineInputProps) => {
  const [value,setValue]=useState("")
  const handleCount=(events: ChangeEvent<HTMLTextAreaElement>)=>{
      let element= events.target as HTMLTextAreaElement
      if(maxLength !== undefined){
        if(element.value.length<=maxLength){
            setValue(element.value)
        }
      }
      else if(maxLength=== undefined)
      {
        setValue(element.value)
      }    
  }
  const textStyle=twMerge("text-1em text-white",isSuccess &&"text-success-600", error && "text-error-600",isDisable&& " text-grey-70")
  const textAreaStyle=twMerge(
    "p-0.2em bg-grey-20 text-grey-70 focus-within:border-2 focus-within:border-mint-300 rounded-xl",
    isLoading && " pointer-events-none",
    isDisable && " pointer-events-none cursor-not-allowed ",
    error && " border-error-600 ",
    isSuccess && " border-success-600 ",
  )
 
  
  return (
    <div className={ twMerge( 'inline-block flex-row', isFullWidth && 'w-full',className)}>
      <div className=" flex justify-between relative">
        <h3 className={textStyle}>{description}</h3>
        {(( maxLength !== undefined) && hasTopCounter) && <div className={textStyle}>{ value.length}/{ maxLength}</div>}
        {value.length!==0 &&
          <button onClick={ ()=>setValue('')} className=" font-bold absolute -bottom-1 top-full right-1 text-white"> X</button>}
      </div>
      
      <div className={textAreaStyle}>
        <textarea {...props}
          value={value}
          maxLength={maxLength} 
          onChange={handleCount}  className={twMerge("bg-inherit text-1em rounded-xl outline-none w-15em h-8em ") }/>
        {((maxLength !== undefined)&& hasBottomCounter) && <div className={textStyle}>{value.length}/{maxLength}</div>}
               
      </div>
      {showStatus &&(
        <>
            {
              (!isLoading && error===null && !isSuccess) &&
              <div className={twMerge("flex gap-1 text-white items-center")}>
                  <LucideFile className="w-1em h-1em"/> <span className="text-1em">hint</span>
              </div>
            }
            {
              error &&
              <div className={twMerge("flex gap-1 text-error-600 items-center")}>
                  <LucideFileWarning className="w-1em h-1em"/> <span className="text-1em">{error}</span>
              </div>
            }
            {
              isLoading &&
              <div className={twMerge("flex gap-1 text-white items-center")}>
                  <SpinnerIcon className="w-1em h-1em"/> <span className="text-1em">Loading...</span>
              </div>
            }
   
            {
              isSuccess &&
              <div className={twMerge("flex gap-1 text-white ","text-success-600 items-center")}>
                  <LucideCheck className="w-1em h-1em"/> <span className="text-1em">Success</span>
              </div>
            }
        </>
      )}
    
    </div>
    )
  };
