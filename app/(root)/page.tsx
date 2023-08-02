import { UserButton } from "@clerk/nextjs"


const SetUpPage=()=> {
    return (
      <div className="p-4">
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    )
  }
  export default SetUpPage
  