"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  Info,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Terminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSettings } from "@/components/nav-settings";
import { NavUser } from "@/components/nav-user";
import { MainProfile } from "@/components/main-profile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title:"About Me",
      url: "/dashboard",
      icon: Info,
    },
    {
      title: "Products",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Mikrotik Router",
          url: "/dashboard/products/mikrotik-router",
        },
        {
          title: "Switches",
          url: "/dashboard/products/switches",
        },
        {
          title: "Ruijie",
          url: "/dashboard/products/ruijie",
        },
        {
          title: "Unifi",
          url: "/dashboard/products/unifi",
        },
        {
          title: "TP-Link",
          url: "/dashboard/products/tp-link",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/docs/introduction",
        },
        {
          title: "Get Started",
          url: "/dashboard/docs/get-started",
        },
        {
          title: "Tutorials",
          url: "/dashboard/docs/tutorials",
        },
        {
          title: "Changelog",
          url: "/dashboard/docs/changelog",
        },
      ],
    },
    {
      title:"Chatbot",
      url: "/dashboard/chatbot",
      icon: Bot,
    }
  ],
  settings: [
    {
      name: "Users",
      url: "#",
      icon: Frame,
    },
    {
      name: "Courses",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Products",
      url: "#",
      icon: Terminal,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <MainProfile />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSettings settings={data.settings} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
