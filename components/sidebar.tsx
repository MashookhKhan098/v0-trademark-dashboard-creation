"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  ShieldCheck,
  Bell,
  Eye,
  Search,
  Sparkles,
  ChevronRight,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: FolderOpen, label: "My Portfolio", href: "/portfolio", hasChevron: true },
    { icon: Users, label: "Clients Manager", href: "/clients" },
    { icon: ShieldCheck, label: "Compliance", href: "/compliance" },
    { icon: Bell, label: "All Updates", href: "/updates", hasChevron: true },
    { icon: Eye, label: "TM Watch", href: "/tm-watch", hasChevron: true },
    { icon: Search, label: "Public Search", href: "/public-search", hasChevron: true },
    { icon: Sparkles, label: "AI Assistant(Beta)", href: "/ai-assistant" },
  ]

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo/Brand */}
      <div className="p-4 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-gray-700" />
          <span className="font-semibold text-gray-900">TM Manager</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Platform</h3>
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3",
                    isActive ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100" : "text-gray-700 hover:bg-gray-100",
                    item.hasChevron && "justify-between",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </div>
                  {item.hasChevron && <ChevronRight className="h-4 w-4" />}
                </Button>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">Ashish</p>
            <p className="text-xs text-gray-500 truncate">ashish@marksimpl.com</p>
          </div>
          <Settings className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </aside>
  )
}
