import { Button } from "@/components";
import { EButtonType } from "@/components/buttons/type";
import { LucideStar } from "lucide-react";


export default function ButtonPage()
{
    return (
        <div className="flex gap-1 w-full flex-wrap justify-center">
            <div>
                <h1 className="text-2xl font-bold">PRIMARY WHITE</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button className="rounded-xl text-24px"> Click me</Button>
                    <Button className="rounded-xl text-24px" leftSymbol={<LucideStar className="w-1em h-1em"/>}> Click me</Button>
                    <Button className="rounded-xl text-24px" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-24px" isLoading={true}> Click me</Button>
                    <Button className="rounded-xl text-24px" isDisable={true}> Click me</Button>

                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY WHITE Large</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button className="rounded-xl text-lg"> Click me</Button>
                    <Button className="rounded-xl text-lg " leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-lg " rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-lg" isLoading={true}> Click me</Button>
                    <Button className="rounded-xl text-lg " isDisable={true}> Click me</Button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY WHITE XL</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button className="rounded-xl text-xl"> Click me</Button>
                    <Button className="rounded-xl text-xl" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-xl" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-xl" isLoading={true}> Click me</Button>
                    <Button className="rounded-xl text-xl" isDisable={true}> Click me</Button>
                </div>
            </div>
            <div className="w-[600px]"></div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY DARK</h1>
                <div className="flex bg-slate-500 justify-between w-[600px] p-2">
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  "> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  " leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl " rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  " isLoading={true}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  " isDisable={true}> Click me</Button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY DARK Large</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg "> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg " leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg " rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg " isLoading={true}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg " isDisable={true}> Click me</Button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY DARK XL</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl "> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl " rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl " isLoading={true}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl " isDisable={true}> Click me</Button>
                </div>
            </div>
        </div>
    )
}