
import TutorialRightSidebarSearch from "./tutorial-right-sidebar-search"


function TutorialRightSidebar() {
  return (
    <div className="xl:min-w-sm hidden xl:flex h-[calc(100vh_-_80px)] px-5 flex-col gap-5">
        <TutorialRightSidebarSearch />
    </div>
  )
}

export default TutorialRightSidebar