import { IInput } from "../inputs/type";

export interface IData {
    name?:string
    value?:string
}
export interface ISearchDrop extends IInput {
    data?:IData[]
   
}