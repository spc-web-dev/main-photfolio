'use client'

import { usePathname } from "next/navigation"
import { Separator } from "../ui/separator"
import { SidebarTrigger } from "../ui/sidebar"

function DashboardHeader() {
    const pathName = usePathname()
    const lastPath = pathName.split('/').filter(Boolean).pop() || ''

  return (
    <header className="sticky top-0 z-10 flex backdrop-blur-md h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <h1>RESSANN LA</h1>
              <Separator orientation="vertical" className="ml-2 data-[orientation=vertical]:h-4" />
                <h2 className="text-sm text-muted-foreground">
                    {lastPath ? lastPath.charAt(0).toUpperCase() + lastPath.slice(1) : 'Dashboard'}
                </h2>
            </div>
          </header>
  )
}

export default DashboardHeader