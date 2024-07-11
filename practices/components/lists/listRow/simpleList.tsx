
import { LucideDelete } from 'lucide-react'
import {Button} from './../../buttons'
import { ILi } from "./type"

export const Li=({
    name,
    children,onDestroy,...rest
}:ILi
)=>{
    return(
        <li className="w-full border-2 rounded-md border-black flex justify-between" {...rest} >
             <div className=" mx-1 flex-row inline-block">
                <h1 className="text-1em font-extrabold">
                    {name}
                </h1>
                {children}  
            </div>
           <Button onClick={onDestroy}><LucideDelete className='w-1em h-1em'/></Button>
        </li>
    )
}