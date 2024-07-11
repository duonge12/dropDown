
import { SearchDrop } from "@/components/lists";
import { IData } from "@/components/lists/type";



export default function ButtonPage()
{
    const arr: IData[]=[
        {
            name:'Human',
            value:'Creative and unpredictable'
        },
        {
            name:'Tiger',
            value:'Fast and dangerous, yet gorgeous'
        },
        {
            name:'Dog',
            value:'Fun and loyal'
        },
        {
            name:'Cat',
            value:'Fun and cute'
        },
        {
            name:'Crocodile',
            value:'Dont mess with me'
        },
        {
            name:'Hawk',
            value:'Fly extremely fast'
        }
    ]
    return (
        <div className="flex gap-1 w-full flex-wrap justify-around">
           <SearchDrop className="text-24px" placeholder="Search..." data={arr}/>
        </div>
    )
}