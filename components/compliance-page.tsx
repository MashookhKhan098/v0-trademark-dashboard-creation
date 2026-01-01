"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronDown, Search, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import { Sidebar } from "@/components/sidebar"

type ComplianceType =
  | "Examination Report Reply"
  | "Renewal Pending"
  | "Hearing (Show Cause)"
  | "Counter Statement"
  | "Evidence Affidavit - Rule 45"
  | "Evidence Affidavit - Rule 46"
  | "Evidence Affidavit - Rule 47"
  | "Hearing (Opposition)"

interface ComplianceItem {
  id: string
  name: string
  type: ComplianceType
  trademark: string
  wordMark?: string
  owner: string
  dueDate: Date
  serialNumber: string
}

const complianceTypes: ComplianceType[] = [
  "Examination Report Reply",
  "Renewal Pending",
  "Hearing (Show Cause)",
  "Counter Statement",
  "Evidence Affidavit - Rule 45",
  "Evidence Affidavit - Rule 46",
  "Evidence Affidavit - Rule 47",
  "Hearing (Opposition)",
]

// Sample compliance data
const complianceData: ComplianceItem[] = [
  {
    id: "1",
    name: "Hearing (Show Cause)",
    type: "Hearing (Show Cause)",
    trademark: "SHATA",
    wordMark: "/placeholder.svg?height=50&width=50",
    owner: "SUVIGYA PATHAK Single Firm",
    dueDate: new Date("2025-04-01"),
    serialNumber: "5872957",
  },
  {
    id: "2",
    name: "Hearing (Show Cause)",
    type: "Hearing (Show Cause)",
    trademark: "LORDS",
    owner: "LORDS DISTILLERY LIMITED Body Incorporate",
    dueDate: new Date("2025-04-08"),
    serialNumber: "4475820",
  },
  {
    id: "3",
    name: "Hearing (Show Cause)",
    type: "Hearing (Show Cause)",
    trademark: "KMB Q",
    wordMark: "/placeholder.svg?height=50&width=50",
    owner: "SHOUKATH ALI Single Firm",
    dueDate: new Date("2025-04-14"),
    serialNumber: "589",
  },
  {
    id: "4",
    name: "Evidence Affidavit - Rule 46",
    type: "Evidence Affidavit - Rule 46",
    trademark: "TIGER I",
    wordMark: "/placeholder.svg?height=50&width=50",
    owner: "KITHURU MOHIDEEN TRADING AS NOOR AND COMPANY Single Firm",
    dueDate: new Date("2025-04-19"),
    serialNumber: "5918",
  },
  {
    id: "5",
    name: "Counter Statement",
    type: "Counter Statement",
    trademark: "NYZEL",
    owner: "NAOS LIFESCIENCES PVT LTD Body Incorporate",
    dueDate: new Date("2025-04-21"),
    serialNumber: "6429333",
  },
  {
    id: "6",
    name: "Hearing (Show Cause)",
    type: "Hearing (Show Cause)",
    trademark: "ukanda",
    owner: "SOUMYADIP HALDER Single Firm",
    dueDate: new Date("2025-04-22"),
    serialNumber: "5926775",
  },
  {
    id: "7",
    name: "Hearing (Show Cause)",
    type: "Hearing (Show Cause)",
    trademark: "COCK BRAND",
    owner: "RATAN BEHARI AGARWAL & MANU GARG Joint Applicant",
    dueDate: new Date("2025-04-23"),
    serialNumber: "5786838",
  },
  {
    id: "8",
    name: "Hearing (Show Cause)",
    type: "Hearing (Show Cause)",
    trademark: "Hi Pro Human HP",
    owner: "ALI JARRAR HUSAIN SHAH Single Firm",
    dueDate: new Date("2025-04-23"),
    serialNumber: "5930368",
  },
  {
    id: "9",
    name: "Evidence Affidavit - Rule 46",
    type: "Evidence Affidavit - Rule 46",
    trademark: "GROLITE",
    owner: "ANKUR JAIN Single Firm",
    dueDate: new Date("2025-04-23"),
    serialNumber: "3982068",
  },
  {
    id: "10",
    name: "Hearing (Show Cause)",
    type: "Hearing (Show Cause)",
    trademark: "Ganpati Herbal",
    owner: "SARITA Single Firm",
    dueDate: new Date("2025-04-28"),
    serialNumber: "5921370",
  },
]

const typeColors: Record<ComplianceType, string> = {
  "Examination Report Reply": "bg-blue-500",
  "Renewal Pending": "bg-green-500",
  "Hearing (Show Cause)": "bg-purple-500",
  "Counter Statement": "bg-orange-500",
  "Evidence Affidavit - Rule 45": "bg-pink-500",
  "Evidence Affidavit - Rule 46": "bg-amber-500",
  "Evidence Affidavit - Rule 47": "bg-teal-500",
  "Hearing (Opposition)": "bg-red-500",
}

export function CompliancePage() {
  const [isCalendarMode, setIsCalendarMode] = useState(true)
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)) // April 2025
  const [selectedTypes, setSelectedTypes] = useState<Set<ComplianceType>>(new Set(complianceTypes))
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getMonthDays = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const daysInPrevMonth = new Date(year, month, 0).getDate()

    const days = []

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        isCurrentMonth: false,
        fullDate: new Date(year, month - 1, daysInPrevMonth - i),
      })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        fullDate: new Date(year, month, i),
      })
    }

    // Next month days to fill the grid
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        fullDate: new Date(year, month + 1, i),
      })
    }

    return days
  }

  const getCompliancesForDate = (date: Date) => {
    return complianceData.filter((item) => {
      const itemDate = item.dueDate
      return (
        selectedTypes.has(item.type) &&
        itemDate.getDate() === date.getDate() &&
        itemDate.getMonth() === date.getMonth() &&
        itemDate.getFullYear() === date.getFullYear()
      )
    })
  }

  const getDaysUntilDue = (dueDate: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const due = new Date(dueDate)
    due.setHours(0, 0, 0, 0)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getDueDateDisplay = (dueDate: Date) => {
    const daysUntil = getDaysUntilDue(dueDate)
    const formattedDate = dueDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

    if (daysUntil < 0) {
      return { text: `${Math.abs(daysUntil)} days overdue`, color: "text-red-500", date: formattedDate }
    } else if (daysUntil === 0) {
      return { text: "Today is the day!", color: "text-orange-500", date: formattedDate }
    } else {
      return { text: `${daysUntil} days remaining`, color: "text-green-500", date: formattedDate }
    }
  }

  const toggleType = (type: ComplianceType) => {
    const newSelected = new Set(selectedTypes)
    if (newSelected.has(type)) {
      newSelected.delete(type)
    } else {
      newSelected.add(type)
    }
    setSelectedTypes(newSelected)
  }

  const selectAll = () => {
    setSelectedTypes(new Set(complianceTypes))
  }

  const resetSelection = () => {
    setSelectedTypes(new Set())
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const filteredCompliances = complianceData.filter((item) => selectedTypes.has(item.type))

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Compliances</h1>
            <div className="flex items-center gap-2">
              <Switch checked={isCalendarMode} onCheckedChange={setIsCalendarMode} />
              <span className="text-sm text-gray-600">Calendar Mode</span>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
              >
                <span className="w-4 h-4 text-blue-500">ℹ️</span>
                Compliance type
                <ChevronDown className="w-4 h-4" />
              </button>

              {isFilterOpen && (
                <div className="absolute top-full mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search Compliance type..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {complianceTypes.map((type) => (
                      <label key={type} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={selectedTypes.has(type)}
                            onChange={() => toggleType(type)}
                            className="w-4 h-4 border-2 border-gray-300 rounded appearance-none checked:bg-blue-500 checked:border-blue-500"
                          />
                          {selectedTypes.has(type) && (
                            <Check className="absolute w-3 h-3 text-white pointer-events-none" />
                          )}
                        </div>
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={selectAll}
                      className="flex-1 px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Select all
                    </button>
                    <button
                      onClick={resetSelection}
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {isCalendarMode && (
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={previousMonth}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <button onClick={goToToday} className="px-4 py-2 text-sm hover:bg-gray-100 rounded">
                Today
              </button>
              <span className="text-sm font-semibold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <Button variant="outline" size="sm" onClick={nextMonth}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Content Area */}
        {isCalendarMode ? (
          <div className="bg-white rounded-lg border border-gray-200">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {dayNames.map((day) => (
                <div key={day} className="p-4 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {getMonthDays(currentDate).map((day, index) => {
                const compliances = getCompliancesForDate(day.fullDate)
                const isToday = day.fullDate.toDateString() === new Date().toDateString()

                return (
                  <div
                    key={index}
                    className={`min-h-32 p-2 border-r border-b border-gray-200 ${
                      !day.isCurrentMonth ? "bg-gray-50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-sm ${
                          isToday
                            ? "w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold"
                            : day.isCurrentMonth
                              ? "text-gray-900"
                              : "text-gray-400"
                        }`}
                      >
                        {day.date}
                      </span>
                      {compliances.length > 0 && (
                        <span className="text-xs text-gray-500">
                          {compliances.length} Task{compliances.length > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      {compliances.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className={`text-xs px-2 py-1 rounded ${typeColors[item.type]} text-white truncate`}
                        >
                          {item.serialNumber} {item.name.substring(0, 15)}...
                        </div>
                      ))}
                      {compliances.length > 3 && (
                        <div className="text-xs text-gray-500 px-2">+{compliances.length - 3} more</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trademark</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Word Mark</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Owner</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCompliances.map((item) => {
                    const dueDateInfo = getDueDateDisplay(item.dueDate)
                    return (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span
                            className={`text-sm font-medium ${
                              item.type === "Hearing (Show Cause)"
                                ? "text-purple-600"
                                : item.type === "Evidence Affidavit - Rule 46"
                                  ? "text-orange-600"
                                  : item.type === "Counter Statement"
                                    ? "text-orange-600"
                                    : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </span>
                          <div className="text-sm text-blue-600">#{item.serialNumber}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.trademark}</td>
                        <td className="px-6 py-4">
                          {item.wordMark && (
                            <Image
                              src={item.wordMark || "/placeholder.svg"}
                              alt={item.trademark}
                              width={50}
                              height={50}
                              className="rounded"
                            />
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.owner}</td>
                        <td className="px-6 py-4">
                          <div className={`text-sm font-medium ${dueDateInfo.color}`}>{dueDateInfo.text}</div>
                          <div className="text-sm text-gray-500">{dueDateInfo.date}</div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Page 1 of 1</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" disabled>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
