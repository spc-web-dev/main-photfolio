import ChangeLog from "@/components/dashboard/docs/changelog"
import GetStarted from "@/components/dashboard/docs/get-started"
import Introduction from "@/components/dashboard/docs/introduction"
import Tutorials from "@/components/dashboard/docs/tutorials"
import { redirect } from "next/navigation"


type SearchParams = Promise<{
  [key: string]: string | string[] | undefined
}>

type Params = Promise< {
  docsId:['introduction'|'get-started' | 'tutorials' |'changelog'],
}>

export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const docsId = params.docsId
  const query = searchParams
}

async function page({ params, searchParams }: { params: Params, searchParams: SearchParams}) {
  const { docsId } = await params

  if(!docsId) return redirect('/dashboard/docs/introduction')
  if(docsId.length > 1) return <>Page Not Found!</>
  if(docsId[0] === 'introduction') return <Introduction />
  if(docsId[0] === 'get-started') return <GetStarted />
  if(docsId[0] === 'tutorials') return <Tutorials searchParams={searchParams}/>
  if(docsId[0] === 'changelog') return <ChangeLog />
}

export default page