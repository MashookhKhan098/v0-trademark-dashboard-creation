"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function AddItemsPage() {
  const [activeTab, setActiveTab] = useState<"applications" | "oppositions">("applications")
  const [applicationNumber, setApplicationNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Submitting application number:", applicationNumber)
    // Handle form submission
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 ml-64">
        <div className="bg-white border-b px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>Portfolio Trademarks</span>
            <span>›</span>
            <span className="text-gray-900 font-medium">Add TMs/Oppositions</span>
          </div>
        </div>

        <div className="p-8">
          <div className="bg-white rounded-lg border">
            <div className="border-b px-6 py-4 flex gap-6">
              <button
                onClick={() => setActiveTab("applications")}
                className={`pb-2 text-sm font-medium transition-colors relative ${
                  activeTab === "applications" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                My Applications
                {activeTab === "applications" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />}
              </button>
              <button
                onClick={() => setActiveTab("oppositions")}
                className={`pb-2 text-sm font-medium transition-colors relative ${
                  activeTab === "oppositions" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Outbound Oppositions
                {activeTab === "oppositions" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />}
              </button>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                  <label className="block text-sm mb-2">
                    Enter{" "}
                    <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                      Application Number
                    </span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter application number"
                    value={applicationNumber}
                    onChange={(e) => setApplicationNumber(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
