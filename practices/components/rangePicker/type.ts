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