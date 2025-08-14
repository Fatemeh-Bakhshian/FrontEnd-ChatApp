import { Button } from "@/components/ui/button"

export interface buttonType{
    style:string;
}

const ButtonComponent = ({style}:buttonType) => {
 return (
    <div className={`flex flex-wrap items-center gap-2 md:flex-row ${style}`}>
      <Button>Button</Button>
    </div>
  )
}

export default ButtonComponent