'use client';


import { ChangeEvent, useState } from "react";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFile, LucideFileWarning } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { IInput } from "./type";



export const PhoneInput= ({ 
  className,
  description,
  leftSymbol,
  rightSymbol,
  isFullWidth=true,
  isDisable=false,
  required=false,
  error=null,
  isLoading=false,
  isSuccess=false,
  showStatus=true,
  ...rest }:IInput
) => {
  const [nation,setNation]=useState('+1')
  const [phone,setPhone]=useState('')

  const handleItemSelected=(e: ChangeEvent<HTMLSelectElement>)=>{
    setNation(e.target.value)
  }
  const handleInputOnChange=(e: ChangeEvent<HTMLInputElement>)=>{
    let str=e.target.value
    let char=str.substring((nation+phone).length+1)
    if (e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === 'deleteContentBackward') {
      // Handle backspace
      setPhone(phone.slice(0, -1)); // Remove last character from phone
    }
    else if(!isNaN(Number(char))){
      setPhone(phone+char)
    }
  }
  const inputStyle=twMerge(
   "bg-grey-20 text-grey-70 rounded-xl focus-within:border-2 focus-within:border-mint-300",
    error&&" border-2 border-error-600",
    isLoading&&" cursor-not-allowed ",
    isSuccess&&" border-2 border-success-600 ",
  )
  
  return (
    <div className={className}>
      <h3 className="text-white text-1em"> {description} </h3>
      <div className={inputStyle}>
      <select value={nation} onChange={handleItemSelected} className="bg-inherit rounded-xl text-1em outline-none">
          <option value="+1"> America </option>
          <option value="+84"> Vietnam </option>
          <option value="+7"> Russia </option>
          <option value="+39"> Italy </option>
          <option value="+86"> China </option>
      </select>
          <input
            className="bg-inherit rounded-xl text-1em outline-none p-0.2em"
            value={nation+' '+phone} onChange={handleInputOnChange} type="tel" {...rest} onBlur={handleInputOnChange} 
          />
          {phone.length!==0 &&<button className=" font-bold " onClick={(e)=>{setPhone('')}}> X </button>}   
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
                <SpinnerIcon className="w-1em h-1em"/> <span className="text-1em ">Loading...</span>
            </div>
          }
   
          {
            isSuccess &&
            <div className={twMerge("flex gap-1 text-white","text-success-600 items-center")}>
                <LucideCheck className="w-1em h-1em"/> <span className="text-1em ">Success</span>
            </div>
          }
        </>
        )}  
    </div>
    )
  };
