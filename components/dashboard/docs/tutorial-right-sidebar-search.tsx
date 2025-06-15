import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { skillsData } from "@/lib/data";
import Link from "next/link";
import React from "react";

function TutorialRightSidebarSearch() {
  return (
    <div>
      <Command className="h-[calc(100vh_-_80px)]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="max-h-full">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Networking">
            {skillsData[1].skills.map((el,ind)=>(
                <CommandItem key={ind}>
                    <Link href={`/dashboard/docs/tutorials?type=${skillsData[1].name}&title=${el}`}>{el}</Link>
                </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Programming">
            {skillsData[0].skills.map((el,ind)=>(
                <CommandItem key={ind}>
                    <Link href={`/dashboard/docs/tutorials?type=${skillsData[0].name}&title=${el}`+el}>{el}</Link>
                </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default TutorialRightSidebarSearch;
