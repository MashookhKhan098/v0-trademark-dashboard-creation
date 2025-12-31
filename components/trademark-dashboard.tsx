"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  ArrowRight,
} from "lucide-react"
import { BarChart, Bar, XAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Sample data for the monthly filing report chart
const monthlyData = [
  { month: "Sep 2020", value: 45 },
  { month: "Dec 2020", value: 52 },
  { month: "Mar 2021", value: 48 },
  { month: "Jun 2021", value: 58 },
  { month: "Sep 2021", value: 62 },
  { month: "Dec 2021", value: 55 },
  { month: "Mar 2022", value: 68 },
  { month: "Jun 2022", value: 72 },
  { month: "Sep 2022", value: 78 },
  { month: "Dec 2022", value: 85 },
  { month: "Mar 2023", value: 75 },
  { month: "Jun 2023", value: 70 },
  { month: "Sep 2023", value: 65 },
  { month: "Dec 2023", value: 80 },
  { month: "Mar 2024", value: 72 },
  { month: "Jun 2024", value: 68 },
  { month: "Sep 2024", value: 90 },
  { month: "Dec 2024", value: 95 },
  { month: "Mar 2025", value: 88 },
  { month: "Apr 2025", value: 82 },
]

const classNumberData = [
  { name: "Class 09", value: 450, color: "#EF4444" },
  { name: "Class 25", value: 380, color: "#F59E0B" },
  { name: "Class 35", value: 420, color: "#10B981" },
  { name: "Class 42", value: 350, color: "#3B82F6" },
  { name: "Class 05", value: 290, color: "#6366F1" },
  { name: "Class 30", value: 320, color: "#8B5CF6" },
  { name: "Class 41", value: 280, color: "#EC4899" },
  { name: "Class 16", value: 208, color: "#14B8A6" },
  { name: "Class 03", value: 170, color: "#F97316" },
]

const stateData = [
  { name: "California", value: 580, color: "#14B8A6" },
  { name: "New York", value: 520, color: "#EF4444" },
  { name: "Texas", value: 450, color: "#F59E0B" },
  { name: "Florida", value: 380, color: "#1F2937" },
  { name: "Illinois", value: 320, color: "#3B82F6" },
  { name: "Ohio", value: 280, color: "#10B981" },
  { name: "Others", value: 338, color: "#9CA3AF" },
]

const statusData = [
  { name: "Registered", value: 1200, color: "#EF4444" },
  { name: "Pending", value: 580, color: "#14B8A6" },
  { name: "Opposed", value: 420, color: "#1F2937" },
  { name: "Abandoned", value: 280, color: "#6B7280" },
  { name: "Renewed", value: 250, color: "#F59E0B" },
  { name: "Expired", value: 180, color: "#D97706" },
  { name: "Cancelled", value: 90, color: "#EF4444" },
  { name: "Filed", value: 68, color: "#3730A3" },
]

export function TrademarkDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo/Brand */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-700" />
            <span className="font-semibold text-gray-900">TM Manager</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Platform</h3>
            <Button
              variant="secondary"
              className="w-full justify-start gap-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-between text-gray-700 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <FolderOpen className="h-4 w-4" />
                My Portfolio
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700 hover:bg-gray-100">
              <Users className="h-4 w-4" />
              Clients Manager
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700 hover:bg-gray-100">
              <ShieldCheck className="h-4 w-4" />
              Compliance
            </Button>
            <Button variant="ghost" className="w-full justify-between text-gray-700 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <Bell className="h-4 w-4" />
                All Updates
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-gray-700 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <Eye className="h-4 w-4" />
                TM Watch
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-gray-700 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <Search className="h-4 w-4" />
                Public Search
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700 hover:bg-gray-100">
              <Sparkles className="h-4 w-4" />
              AI Assistant(Beta)
            </Button>
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

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-8">Hello, Ashish.</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">2,868</p>
                  <p className="text-sm text-gray-500 mt-1">Trademarks</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Card>
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">360</p>
                  <p className="text-sm text-gray-500 mt-1">Inbound Oppositions</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Card>
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">76</p>
                  <p className="text-sm text-gray-500 mt-1">Outbound Oppositions</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Card>
          </div>

          {/* Pending Compliance */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Pending Compliance</h2>
            <p className="text-sm text-gray-500 mb-4">
              Compliances are marked as <span className="italic">urgent</span> if their due date falls within (T-3 →
              T+7) .
            </p>

            <div className="grid grid-cols-5 gap-4">
              <Card className="p-5 bg-white border border-gray-200">
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Examination Report Reply</p>
                <p className="text-4xl font-bold text-gray-900">0</p>
              </Card>
              <Card className="p-5 bg-white border border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Renewal Pending</p>
                <p className="text-4xl font-bold text-gray-900">4</p>
              </Card>
              <Card className="p-5 bg-white border border-gray-200 relative">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs text-gray-600 leading-relaxed pr-2">Hearing (Show Cause)</p>
                  <Badge className="bg-red-500 text-white text-xs px-2 py-0.5 hover:bg-red-600">Urgent</Badge>
                </div>
                <p className="text-4xl font-bold text-gray-900">22</p>
              </Card>
              <Card className="p-5 bg-white border border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Counter Statement</p>
                <p className="text-4xl font-bold text-gray-900">5</p>
              </Card>
              <Card className="p-5 bg-white border border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Evidentiary</p>
                <p className="text-4xl font-bold text-gray-900">4</p>
              </Card>
            </div>
          </div>

          {/* Monthly Filing Report */}
          <Card className="p-6 bg-white border border-gray-200 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Monthly Filing Report</h2>
                <p className="text-sm text-gray-500">Monthly trend for the last few years</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Total</p>
                <p className="text-3xl font-bold text-gray-900">2,039</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  tickLine={false}
                  axisLine={false}
                  interval={2}
                />
                <Bar dataKey="value" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Class Number Donut Chart */}
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-6">Class Number</h3>
              <div className="relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={classNumberData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {classNumberData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-3xl font-bold text-gray-900">2,868</p>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
              </div>
            </Card>

            {/* State Donut Chart */}
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-6">State</h3>
              <div className="relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={stateData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {stateData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-3xl font-bold text-gray-900">2,868</p>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
              </div>
            </Card>

            {/* Status Horizontal Bar Chart */}
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-6">Status</h3>
              <div className="space-y-3">
                {statusData.map((status, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div
                        className="h-8 rounded"
                        style={{ backgroundColor: status.color, width: `${(status.value / 1200) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Table */}
          <Card className="bg-white border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">Class Number</th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">State</th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-gray-600">Class 09</td>
                    <td className="p-4 text-sm text-gray-600">California</td>
                    <td className="p-4">
                      <Badge variant="secondary" className="bg-green-50 text-green-700">
                        Active
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-gray-600">Class 25</td>
                    <td className="p-4 text-sm text-gray-600">New York</td>
                    <td className="p-4">
                      <Badge variant="secondary" className="bg-yellow-50 text-yellow-700">
                        Pending
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-gray-600">Class 42</td>
                    <td className="p-4 text-sm text-gray-600">Texas</td>
                    <td className="p-4">
                      <Badge variant="secondary" className="bg-green-50 text-green-700">
                        Active
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
