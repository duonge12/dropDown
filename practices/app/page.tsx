
import { Button } from "@/components";
import { EButtonType } from "@/components/buttons/type";
import Link from "next/link";






export default function Home() {
  return (
    <div className="flex justify-center">
      <Button colorTheme={EButtonType.PRIMARY_DARK}  className="rounded-lg p-2"><Link href={'/buttons'}>Go to buttons<br/>(Finished)</Link></Button>
      <br/>
      <Button colorTheme={EButtonType.PRIMARY_DARK}  className="rounded-lg p-2"><Link href={'/inputs'}>Go to inputs<br/>(Finished)</Link></Button>
      <br/>
      <Button colorTheme={EButtonType.PRIMARY_DARK}  className="rounded-lg p-2"><Link href={'/dropDown'}>Go to dropdown<br/>(Finished)</Link></Button>
      <br/>
     
      
    </div>
    
    
  );
}
