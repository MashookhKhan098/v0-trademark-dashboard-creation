"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown, Download } from "lucide-react"

interface Trademark {
  id: string
  appNum: string
  wordMark: string
  image: string | null
  class: string
  appDate: string
  status: string
  statusType: "send" | "pass"
  proprietor: string
  client: string
}

export function PortfolioPage() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [searchFilter, setSearchFilter] = useState("Word Mark")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample trademark data
  const trademarks: Trademark[] = [
    {
      id: "1",
      appNum: "6942018",
      wordMark: "1 Million Founders",
      image: "/images/image.jpg",
      class: "41",
      appDate: "Apr 5, 2025",
      status: "Send To Vienna Codification",
      statusType: "send",
      proprietor: "PHONON SOLUTIONS..",
      client: "Ashish Goyal",
    },
    {
      id: "2",
      appNum: "6941011",
      wordMark: "ANMOL INDUSTRIES - Driving Your Business Forward",
      image: "/images/image.jpg",
      class: "45",
      appDate: "Apr 4, 2025",
      status: "Send To Vienna Codification",
      statusType: "send",
      proprietor: "PULLIN MOHANTY Single Firm",
      client: "Assign",
    },
    {
      id: "3",
      appNum: "6940518",
      wordMark: "TYLE-EX",
      image: "/images/image.jpg",
      class: "1",
      appDate: "Apr 4, 2025",
      status: "Send To Vienna Codification",
      statusType: "send",
      proprietor: "A DARSHAN Single Firm",
      client: "Assign",
    },
    {
      id: "4",
      appNum: "6937820",
      wordMark: "PHARMAC 20",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "INTHERA PHARMAMED..",
      client: "Assign",
    },
    {
      id: "5",
      appNum: "6937824",
      wordMark: "PHARMASCORBOL",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "INTHERA PHARMAMED..",
      client: "Assign",
    },
    {
      id: "6",
      appNum: "6937822",
      wordMark: "PHARMASIUM 20",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "INTHERA PHARMAMED..",
      client: "Assign",
    },
    {
      id: "7",
      appNum: "6937677",
      wordMark: "DIFMATE",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "QUINOVIC..",
      client: "Assign",
    },
    {
      id: "8",
      appNum: "6937825",
      wordMark: "PHARMAGIC",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "INTHERA PHARMAMED..",
      client: "Assign",
    },
    {
      id: "9",
      appNum: "6937823",
      wordMark: "PHARMAC 40",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "INTHERA PHARMAMED..",
      client: "Assign",
    },
    {
      id: "10",
      appNum: "6937676",
      wordMark: "DIFTRIST",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "QUINOVIC..",
      client: "Assign",
    },
    {
      id: "11",
      appNum: "6937819",
      wordMark: "PHARMASIUM 40",
      image: null,
      class: "5",
      appDate: "Apr 2, 2025",
      status: "Formalities Chk Pass",
      statusType: "pass",
      proprietor: "INTHERA PHARMAMED..",
      client: "Assign",
    },
    {
      id: "12",
      appNum: "6937491",
      wordMark: "FILING CLICKS (DEVICE)",
      image: "/images/image.jpg",
      class: "35",
      appDate: "Apr 2, 2025",
      status: "Send To Vienna Codification",
      statusType: "send",
      proprietor: "M/S FILING CLICKS..",
      client: "Assign",
    },
    {
      id: "13",
      appNum: "6937492",
      wordMark: "FILING CLICKS (DEVICE)",
      image: "/images/image.jpg",
      class: "45",
      appDate: "Apr 2, 2025",
      status: "Send To Vienna Codification",
      statusType: "send",
      proprietor: "M/S FILING CLICKS..",
      client: "Assign",
    },
  ]

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(trademarks.map((tm) => tm.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id])
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Portfolio Trademarks</h1>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="p-4 flex gap-3">
              <div className="relative">
                <Button variant="outline" className="w-40 justify-between bg-transparent">
                  {searchFilter}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <Input
                placeholder="Type query here..."
                className="flex-1 max-w-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Search</Button>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" className="gap-2 bg-transparent">
                  Status
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Class
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Alert
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Docs
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Application Date
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-t border-b border-gray-200">
                    <th className="text-left p-4 w-12">
                      <Checkbox checked={selectedRows.length === trademarks.length} onCheckedChange={handleSelectAll} />
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">App. Num</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">Word Mark</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">Image</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">Class</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">App. Date</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">Proprietor</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">Client</th>
                  </tr>
                </thead>
                <tbody>
                  {trademarks.map((tm) => (
                    <tr key={tm.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">
                        <Checkbox
                          checked={selectedRows.includes(tm.id)}
                          onCheckedChange={(checked) => handleSelectRow(tm.id, checked as boolean)}
                        />
                      </td>
                      <td className="p-4">
                        <button className="text-blue-600 hover:text-blue-700 font-medium">{tm.appNum}</button>
                      </td>
                      <td className="p-4 text-sm text-gray-900">{tm.wordMark}</td>
                      <td className="p-4">
                        {tm.image ? (
                          <img
                            src={tm.image || "/placeholder.svg"}
                            alt={tm.wordMark}
                            className="h-10 w-10 object-contain rounded"
                          />
                        ) : (
                          <div className="h-10 w-10 bg-gray-100 rounded" />
                        )}
                      </td>
                      <td className="p-4 text-sm text-gray-900">{tm.class}</td>
                      <td className="p-4 text-sm text-gray-900">{tm.appDate}</td>
                      <td className="p-4">
                        <Badge
                          variant={tm.statusType === "send" ? "default" : "secondary"}
                          className={
                            tm.statusType === "send"
                              ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                          }
                        >
                          {tm.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm text-gray-900">{tm.proprietor}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          {tm.client}
                          <ChevronDown className="h-3 w-3 ml-1" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="p-4 flex items-center justify-between border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">{selectedRows.length} of 2868 row(s) selected.</span>
                <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
                  <Download className="h-4 w-4" />
                  Export all
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Page 1 of 29</span>
                <div className="flex gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
