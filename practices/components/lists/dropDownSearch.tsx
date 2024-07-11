'use client';



import { ChangeEvent, useEffect, useState } from "react"

import { LucideSearch } from "lucide-react"

import { Button } from "../buttons";
import { SimpleInput } from "../inputs";

import { twMerge } from "tailwind-merge";
import { IData, ISearchDrop } from "./type";
import { Li } from "./listRow";
import { EButtonType } from "../buttons/type";

export const SearchDrop=(
{
    className,
    placeholder,
    isFullWidth,
    data,
    isDisable=false,
    isLoading=false,
    error=null,
    isSuccess,...props
}:ISearchDrop
)=>{
    const [drop,setDrop]=useState(true)
    const [value,setValue]=useState('')

    const [list,setList]=useState<IData[]>(data as IData[])
    const [displayList,setDisplayList]=useState<IData[]>(list)
    const [removeList,addRemoveList]=useState<IData[]>([] as IData[])
   
    const handleSearching=(e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    const onDestroy=(data: IData)=>{
        let newList=list?.filter(item=> item.name!== data.name)
        setList(newList)
        addRemoveList([...removeList,data])
    }
    const onAdd=(data: IData)=>{
        setList([...list,data])
        let newList=removeList.filter(item=>item!==data)
        addRemoveList(newList)
    }
    const handleDrop=()=>{
        if(drop===true)
            setDrop(false)
        else
            setDrop(true)
    }
    useEffect(()=>{
        let newList=list.filter(item=> item.name.toLowerCase().startsWith(value.toLowerCase()))
        setDisplayList(newList)
    },[value,list])
    const searchStyle=twMerge("w-13em",className)
    
    return(
        <div className={searchStyle}>
            <div className={twMerge( removeList.length===0? " hidden": "")}>
               {removeList.length>0 && removeList.map(item=>
                <Button 
                    className="m-0.0.5em"
                    colorTheme={EButtonType.PRIMARY_DARK} 
                    key={item.name} 
                    onClick={()=>onAdd(item)}>
                    <span className="text-1em font-serif">{item.name}</span>
                </Button>
               )}
            </div>
            <button onClick={handleDrop} className="w-13em">
                <SimpleInput 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={handleSearching} 
                    leftSymbol={<LucideSearch className="w-2em h-2em"/>} 
                    showStatus={false}/>
            </button>
            <ul className={twMerge("absolute","w-13em",drop&& "hidden")}>
                {
                   (displayList!== undefined)&& displayList.map(item =>(
                            <Li 
                                key={item.name} 
                                name={item.name} 
                                value={item.value} 
                                onDestroy={()=>onDestroy(item)}>
                                <span className="text-0.75em">{item.value}</span>
                            </Li>
                        )
                    )
                }
            </ul>
        </div>
    )
}