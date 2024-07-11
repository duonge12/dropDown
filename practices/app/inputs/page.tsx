import { MultilineInput, PassWordInput, PhoneInput, SimpleInput } from "@/components";
import { LucideLock, LucideSearch, LucideStar } from "lucide-react";


export default function ButtonPage()
{
    return (
        <div className="">
            <div>
                <h1 className="text-2xl font-bold">Simple input</h1>
                <div className="flex bg-black justify-between  p-2">
                    <SimpleInput className="text-xl" description="Description( optional)" isFullWidth={false} placeholder="Type here..."/>
                    <SimpleInput className="text-xl" description="Description( optional)" 
                        isFullWidth={false} placeholder="Type here..."
                        isLoading={true}
                        leftSymbol={<LucideSearch/>}/>
                    <SimpleInput className="text-xl " description="Description( optional)" 
                        isFullWidth={false} placeholder="Type here..."
                        error="This is required"/>  
                    <SimpleInput className="text-xl" description="Description( optional)" 
                        isFullWidth={false} placeholder="Type here..."
                        isSuccess={true}/>    
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Multiline input</h1>
                <div className="flex bg-black justify-between w-full p-2 gap-3">
                  <MultilineInput 
                    className="text-xl" 
                    description="Decription" 
                    placeholder="Put your text here..."
                    error={'Error'}
                    />
                  <MultilineInput 
                    className="text-xl " 
                    description="Decription" 
                    placeholder="Put your text here..."
                    hasTopCounter={true}
                    maxLength={10}
                    isSuccess={true}
                    />
                    <MultilineInput 
                    className="text-xl " 
                    description="Decription" 
                    placeholder="Put your text here..."
                    hasBottomCounter={true}
                    maxLength={10}
                    />
                     <MultilineInput 
                    className="text-xl " 
                    description="Decription" 
                    placeholder="Put your text here..."
                    hasBottomCounter={true}
                    maxLength={10}
                    isDisable={true}
                    />
                     <MultilineInput 
                    className="text-xl " 
                    description="Decription" 
                    placeholder="Put your text here..."
                    hasBottomCounter={true}
                    maxLength={10}
                    isLoading={true}
                    />
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Password input</h1>
                <div className="flex bg-black justify-between w-full p-2 gap-3">
                  
                <PassWordInput className="text-24px" description="Description" placeholder="pass..."/>
                <PassWordInput leftSymbol={<LucideLock className="w-1em h-1em"/>} className="text-2xl " description="Description" placeholder="pass..." isLoading={true}/>
                <PassWordInput className="text-xl " description="Description" placeholder="pass..." error="Password incorrect"/>
                <PassWordInput className="text-2xl " description="Description" placeholder="pass..." isSuccess={true}/>
                </div>

                <h1 className="text-2xl font-bold">Phone number input</h1>
                <div className="flex bg-black justify-between w-full p-2 gap-3">
                <PhoneInput className="text-24px" description="Phone number"/>
                <PhoneInput className="text-24px" description="Phone number" error="incorrect phone"/>
                <PhoneInput className="text-24px" description="Phone number" isSuccess={true}/>

               
                </div>
            </div>
         
          
          
         
        </div>
    )
}