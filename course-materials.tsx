"use client"

import { Clock, Globe, Layers, User, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function CourseMaterials() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-2xl font-bold">Course Materials</h1>
      {/* <div className="grid md:grid-cols-2 gap-6"> */}
        <div className="space-y-6">
          {/* Course Materials Cards */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="grid grid-cols-2 bg-white gap-4 hover:shadow-2xl hover:bg-white">
              <div className="flex items-center gap-2 bg-white">
                <Clock className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Duration:</p>
                  <p className="font-medium">3 weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Duration:</p>
                  <p className="font-medium">3 weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Lessons:</p>
                  <p className="font-medium">8</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Lessons:</p>
                  <p className="font-medium">8</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Enrolled:</p>
                  <p className="font-medium">65 students</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Enrolled:</p>
                  <p className="font-medium">65 students</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Language:</p>
                  <p className="font-medium">English</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Language:</p>
                  <p className="font-medium text-blue-500">English</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <div className="space-y-6">

              <div className="flex gap-3">
                <div className="shrink-0">
                  <Image
                    src="/graduated.png"
                    alt="Student avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium">Student Name Goes Here</p>
                  <p className="text-sm text-gray-500 mb-1">Oct 10, 2021</p>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Student avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium">Student Name Goes Here</p>
                  <p className="text-sm text-gray-500 mb-1">Oct 15, 2021</p>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Student avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium">Student Name Goes Here</p>
                  <p className="text-sm text-gray-500 mb-1">Oct 18, 2021</p>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Week 5-8 Section */}
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-1">Week 5-8</h2>
            <p className="text-sm text-gray-600 mb-4">
              Advanced story telling techniques for writers: Personas, Characters & Plots
            </p>

            <div className="space-y-3">
              {/* Lesson items */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-sm">Defining Functions</span>
                </div>
                <span className="text-gray-400">8</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-sm">Function Parameters</span>
                </div>
                <span className="text-gray-400">8</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-sm">Return Values From Functions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">QUESTION</span>
                  <span className="text-xs text-gray-500">10 MINUTES</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-sm">Global Variable and Scope</span>
                </div>
                <span className="text-gray-400">8</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-sm">Newer Way of creating a Constant</span>
                </div>
                <span className="text-gray-400">8</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-sm">Constants</span>
                </div>
                <span className="text-gray-400">8</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-1">Week 5-8</h2>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Defining Functions</span>
              <span className="text-gray-400">8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded-lg shadow-lg p-2 border">
        <button className="p-2 bg-blue-500 text-white rounded">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22L3 17V7L12 2L21 7V17L12 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="p-2 rounded hover:bg-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11.5C9.82843 11.5 10.5 10.8284 10.5 10C10.5 9.17157 9.82843 8.5 9 8.5C8.17157 8.5 7.5 9.17157 7.5 10C7.5 10.8284 8.17157 11.5 9 11.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 8.5C15.8284 8.5 16.5 7.82843 16.5 7C16.5 6.17157 15.8284 5.5 15 5.5C14.1716 5.5 13.5 6.17157 13.5 7C13.5 7.82843 14.1716 8.5 15 8.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 18.5C9.82843 18.5 10.5 17.8284 10.5 17C10.5 16.1716 9.82843 15.5 9 15.5C8.17157 15.5 7.5 16.1716 7.5 17C7.5 17.8284 8.17157 18.5 9 18.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 15.5C15.8284 15.5 16.5 14.8284 16.5 14C16.5 13.1716 15.8284 12.5 15 12.5C14.1716 12.5 13.5 13.1716 13.5 14C13.5 14.8284 14.1716 15.5 15 15.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="p-2 rounded hover:bg-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        </button>
      </div>
    </div>
  )
}
