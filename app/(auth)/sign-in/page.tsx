
import SignIn from "@/components/auth/sign-in"


function page() {
  console.log('Sign In page loaded');
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <SignIn />
    </div>
  )
}

export default page