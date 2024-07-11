import { ReactNode } from "react"

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    className?:string
    description?:string
    leftSymbol?:ReactNode
    rightSymbol?:ReactNode
    isFullWidth?:boolean 
    isDisable?:boolean
    required?:boolean
    isLoading?:boolean
    error?:string | null
    isSuccess?:boolean |null
    showStatus?:boolean
}
export interface MultilineInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?:string
    description?:string
    hasTopCounter?:boolean|null
    hasBottomCounter?:boolean|null
    isFullWidth?:boolean|null
    isDisable?:boolean
    required?:boolean
    isLoading?:boolean
    error?:string | null
    isSuccess?:boolean |null
    maxLength?:number|undefined
    showStatus?:boolean
}



