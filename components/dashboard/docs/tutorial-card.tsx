import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"



function TutorialCard() {
  return (
    <Card className="">
        <div className="w-full h-40">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/watch?v=37ENaoo8-4A&list=RD37ENaoo8-4A&start_radio=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-md w-full h-full object-cover"
            />
        </div>
        <CardContent>
            <div className="space-y-2">
              <CardTitle>Basic configure mikrotik router</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nobis.
              </CardDescription>
            </div>
        </CardContent>
        <CardFooter className="space-x-2">
            <Button variant={'secondary'} className="cursor-pointer" asChild>
              <Link href={'/'}><Play /></Link>
            </Button>
            <Button variant={'secondary'} className="cursor-pointer" asChild>
              <Link href={'/'}><FaGithub /></Link>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default TutorialCard