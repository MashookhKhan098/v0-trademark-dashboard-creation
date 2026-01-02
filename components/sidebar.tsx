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
  Hash,
  Circle,
  Plus,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function Sidebar() {
  const pathname = usePathname()
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(pathname.startsWith("/portfolio"))

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: FolderOpen, label: "My Portfolio", href: "/portfolio", hasChevron: true, expandable: true },
    { icon: Users, label: "Clients Manager", href: "/clients" },
    { icon: ShieldCheck, label: "Compliance", href: "/compliance" },
    { icon: Bell, label: "All Updates", href: "/updates", hasChevron: true },
    { icon: Eye, label: "TM Watch", href: "/tm-watch", hasChevron: true },
    { icon: Search, label: "Public Search", href: "/public-search", hasChevron: true },
    { icon: Sparkles, label: "AI Assistant(Beta)", href: "/ai-assistant" },
  ]

  const portfolioSubmenu = [
    { icon: Hash, label: "Trademarks", href: "/portfolio" },
    { icon: Circle, label: "Oppositions", href: "/portfolio/oppositions" },
    { icon: Plus, label: "Add TMs/Oppositions", href: "/portfolio/add-items" },
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
              <div key={item.href}>
                {item.expandable ? (
                  <Button
                    variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3",
                      pathname.startsWith(item.href)
                        ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                        : "text-gray-700 hover:bg-gray-100",
                      "justify-between",
                    )}
                    onClick={() => setIsPortfolioExpanded(!isPortfolioExpanded)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </div>
                    <ChevronRight className={cn("h-4 w-4 transition-transform", isPortfolioExpanded && "rotate-90")} />
                  </Button>
                ) : (
                  <Link href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start gap-3",
                        isActive
                          ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                          : "text-gray-700 hover:bg-gray-100",
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
                )}

                {item.expandable && isPortfolioExpanded && (
                  <div className="ml-4 mt-1 space-y-1">
                    {portfolioSubmenu.map((subItem) => {
                      const SubIcon = subItem.icon
                      const isSubActive = pathname === subItem.href

                      return (
                        <Link key={subItem.href} href={subItem.href}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "w-full justify-start gap-3 text-sm",
                              isSubActive
                                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-100"
                                : "text-gray-600 hover:bg-gray-100",
                            )}
                          >
                            <SubIcon className="h-3 w-3" />
                            {subItem.label}
                          </Button>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
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
