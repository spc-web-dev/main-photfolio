'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import TutorialRightSidebar from "./tutorial-right-sidebar"
import TutorialCard from "./tutorial-card"
import { use } from 'react'

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined
}>


function Tutorials({ searchParams }: { searchParams: SearchParams}) {
  const query = use(searchParams)
  const { type, title } = query
  console.log(query)
  return (
    <div className="flex gap-1">
      <ScrollArea className="w-full h-[calc(100vh_-_80px)]">
        <div className="px-5 grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
          {Array.from({ length: 10}).map((_,ind)=>(
            <TutorialCard key={ind}/>
          ))}
        </div>
      </ScrollArea>
      <TutorialRightSidebar /> 
    </div>
  )
}

export default Tutorials