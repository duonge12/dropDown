import { ReferrerEnum } from "next/dist/lib/metadata/types/metadata-types"
import { ReactNode } from "react"
export enum EButtonType
{
    PRIMARY_WHITE='primary-white',
    OUTLINE='out-line',
    PRIMARY_DARK='primary-dark',
    SECONDARY_DARK='secondary-dark',
    TEXT_DARK='text-dark'
}
export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string
    leftSymbol?:ReactNode
    rightSymbol?:ReactNode
    colorTheme?:EButtonType
    children?:ReactNode
    isLoading?:boolean
    isFullWidth?:boolean
    isDisable?:boolean
}