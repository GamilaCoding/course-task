"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import {
  Clock,
  Globe,
  Layers,
  User,
  ChevronRight,
  Check,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

// Define types for our video data
interface Video {
  id: string;
  title: string;
  url: string;
  duration: number;
  type: "introduction" | "overview" | "exercise" | "installation" | "embedding";
  tags?: {
    isQuestion?: boolean;
    minutes?: number;
  };
}

interface CourseSection {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

// Sample course data
const courseData: CourseSection[] = [
  {
    id: "week-1-4",
    title: "Week 1-4",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    videos: [
      {
        id: "intro",
        title: "Introduction",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        duration: 596,
        type: "introduction",
      },
      {
        id: "overview-1",
        title: "Course Overview",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        duration: 653,
        type: "overview",
      },
      {
        id: "overview-2",
        title: "Course Overview",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        duration: 180,
        type: "overview",
        tags: {
          isQuestion: true,
          minutes: 10,
        },
      },
      {
        id: "exercise",
        title: "Course Exercise / Reference Files",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        duration: 150,
        type: "exercise",
      },
      {
        id: "installation",
        title: "Code Editor Installation (Optional if you have one)",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        duration: 240,
        type: "installation",
      },
      {
        id: "embedding",
        title: "Embedding PHP in HTML",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        duration: 182,
        type: "embedding",
      },
    ],
  },
];

export default function CoursePlayer() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [watchProgress, setWatchProgress] = useState<Record<string, number>>(
    {}
  );
  const [watchedVideos, setWatchedVideos] = useState<Record<string, boolean>>(
    {}
  );
  const [overallProgress, setOverallProgress] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);
  const [newComment, setNewComment] = useState("");

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    // Get saved data from localStorage
    const savedProgress = localStorage.getItem("videoProgress");
    const savedWatched = localStorage.getItem("watchedVideos");

    // If we have saved progress data, load it into state
    if (savedProgress) {
      setWatchProgress(JSON.parse(savedProgress));
      console.log(
        "Loaded progress from localStorage:",
        JSON.parse(savedProgress)
      );
    }

    // If we have saved watched status data, load it into state
    if (savedWatched) {
      setWatchedVideos(JSON.parse(savedWatched));
      console.log(
        "Loaded watched status from localStorage:",
        JSON.parse(savedWatched)
      );
    }

    // Set the first video as active if none is selected
    if (
      !activeVideo &&
      courseData.length > 0 &&
      courseData[0].videos.length > 0
    ) {
      setActiveVideo(courseData[0].videos[0]);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Calculate overall course progress whenever watched videos change
  useEffect(() => {
    const totalVideos = courseData.reduce(
      (acc, section) => acc + section.videos.length,
      0
    );
    const watchedCount = Object.values(watchedVideos).filter(Boolean).length;
    const progress = Math.round((watchedCount / totalVideos) * 100);
    setOverallProgress(progress);
  }, [watchedVideos]);

  // Handle video progress updates and save to localStorage
  const handleProgress = (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    if (!activeVideo) return;

    const videoId = activeVideo.id;
    const currentProgress = state.playedSeconds / activeVideo.duration;

    // Update progress and save to localStorage
    setWatchProgress((prev) => {
      const newProgress = { ...prev, [videoId]: currentProgress };
      localStorage.setItem("videoProgress", JSON.stringify(newProgress));
      console.log("Saved progress to localStorage:", newProgress);
      return newProgress;
    });

    // Mark as watched if 80% or more is completed and save to localStorage
    if (currentProgress >= 0.8 && !watchedVideos[videoId]) {
      setWatchedVideos((prev) => {
        const newWatched = { ...prev, [videoId]: true };
        localStorage.setItem("watchedVideos", JSON.stringify(newWatched));
        console.log("Saved watched status to localStorage:", newWatched);
        return newWatched;
      });
    }
  };

  // Handle video selection
  const handleVideoSelect = (video: Video) => {
    setActiveVideo(video);
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the comment to a database
    console.log("Comment submitted:", newComment);
    setNewComment("");
    // You could add the new comment to a comments state array here
  };

  // Get the icon for a video type
  const getVideoTypeIcon = (type: Video["type"]) => {
    return <ChevronRight className="w-3 h-3 text-orange-500" />;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm mb-4 text-gray-500">
        <Link href="/" className="hover:text-gray-700 flex items-center">
          <Home className="w-3 h-3 mr-1" />
          Home
        </Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link href="/courses" className="hover:text-gray-700">
          Courses
        </Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-gray-700">Course Details</span>
      </nav>

      {/* Course Title */}
      <h1 className="text-3xl font-bold mb-6">Starting SEO as your Home</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Video Player */}
          <div className="relative rounded-lg overflow-hidden bg-green aspect-video mb-4">
            {activeVideo ? (
              <ReactPlayer
                ref={playerRef}
                url={activeVideo.url}
                width="100%"
                height="100%"
                controls
                onProgress={handleProgress}
                progressInterval={1000}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                Select a video to play
              </div>
            )}
          </div>

          {/* Social Share Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="p-2 text-gray-500 hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </button>
          </div>

          {/* Course Materials Header */}
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold">Course Materials</h2>
          </div>

          {/* Course Materials Cards */}
          <div className="bg-white rounded-xl p-6 shadow-2xl mb-6 shadow-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">⏱️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration:</p>
                  <p className="font-medium">3 weeks</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">⏱️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration:</p>
                  <p className="font-medium">3 weeks</p>
                </div>
              </div>

              <hr className="col-span-2 border-t border-gray-200 my-2" />

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">📚</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lessons:</p>
                  <p className="font-medium">8</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">📚</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lessons:</p>
                  <p className="font-medium">8</p>
                </div>
              </div>

              <hr className="col-span-2 border-t border-gray-200 my-2" />

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">👤</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Enrolled:</p>
                  <p className="font-medium">65 students</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">👤</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Enrolled:</p>
                  <p className="font-medium">65 students</p>
                </div>
              </div>

              <hr className="col-span-2 border-t border-gray-200 my-2" />

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">🌐</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Language:</p>
                  <p className="font-medium">English</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <span className="text-gray-500 text-sm">🌐</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Language:</p>
                  <p className="font-medium text-blue-500">English</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <Image
                    src="https://i.imgur.com/uGLCNtQ.png"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <Image
                    src="https://i.imgur.com/uGLCNtQ.png"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <Image
                    src="https://i.imgur.com/uGLCNtQ.png"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              {/* Add Comment Form */}
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Add a Comment</h3>
                <form onSubmit={handleCommentSubmit} className="flex gap-3">
                  <div className="shrink-0">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Your avatar"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <textarea
                      className="w-full border rounded-md p-3 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Write your comment here..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                    <div className="mt-2 flex justify-end">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content Sidebar */}
        <div className="md:col-span-1">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Topics for This Course</h2>

            {/* Overall Progress */}
            <div className="mb-6 ">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2 bg-green-500" />
            </div>

            {/* Course Sections */}
            {courseData.map((section) => (
              <div key={section.id} className="mb-6">
                <h3 className="text-lg font-bold mb-1">{section.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {section.description}
                </p>

                <div className="space-y-3">
                  {section.videos.map((video) => (
                    <button
                      key={video.id}
                      className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                        activeVideo?.id === video.id
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleVideoSelect(video)}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                          {watchedVideos[video.id] ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            getVideoTypeIcon(video.type)
                          )}
                        </div>
                        <span className="text-sm text-left">{video.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {video.tags?.isQuestion && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            QUESTION
                          </span>
                        )}
                        {video.tags?.minutes && (
                          <span className="text-xs text-gray-500">
                            {video.tags.minutes} MINUTES
                          </span>
                        )}
                        {!video.tags && (
                          <span className="text-gray-400">
                            {watchProgress[video.id]
                              ? Math.round(watchProgress[video.id] * 100)
                              : 0}
                            %
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
