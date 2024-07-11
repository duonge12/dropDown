'use client';

import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFile, LucideFileWarning } from "lucide-react";
import { IInput } from "./type";



export const SimpleInput= ({ 
  className,
  description,
  leftSymbol,
  rightSymbol,
  isFullWidth=true,
  isDisable=false,
  required=false,
  error=null,
  isLoading=false,
  isSuccess,showStatus=true,
  ...props }:IInput
) => {
 
  
  const inputStyle=twMerge(
    "bg-grey-20 text-grey-70 w-13em flex items-center rounded-xl focus-within:border-2 focus-within:border-mint-300",
    error&&" border-2 border-error-600",
    isLoading&&" cursor-not-allowed ",
    isSuccess&&" border-2 border-success-600 ",
  )


  
  
  return (
    <div className={twMerge("",className)} >

      <h3 className="text-white text-1em"> {description} </h3>
      <div className={twMerge( inputStyle, className)}>
          {leftSymbol}
          <input {...props} required={required} disabled={isDisable|| isLoading} 
            className={twMerge("text-1em w-11em bg-inherit outline-none rounded-xl p-0.2em",
              isLoading&&" cursor-not-allowed ")}
          />
          {rightSymbol}
      </div>
      {showStatus &&
        ( <> {
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
          <div className={twMerge("flex gap-1 text-white","text-success-600 items-center")}>
              <LucideCheck className="w-1em h-1em"/> <span className="text-1em">Success</span>
          </div>
        } </>)

      }
     
    </div>
    )
  };
