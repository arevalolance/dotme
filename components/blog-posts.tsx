"use client"

import { useState } from "react"
import Link from "next/link"
import { allBlogs } from "@/.contentlayer/generated"
import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Input } from "./ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import MindCard from "./mind-card"

const topics = ["Productivity", "Tools and Technology", "Thoughts", "Others"]

export default function BlogPosts() {
  const [topicFilter, setTopicFilter] = useState("")
  const [searchEntry, setSearchEntry] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const currentPosts = allBlogs
    .filter(
      (e) =>
        e.title.toLowerCase().includes(searchFilter) ||
        e.summary.toLowerCase().includes(searchFilter) ||
        e.body.raw.toLowerCase().includes(searchFilter)
    )
    .filter((e) => {
      if (topicFilter !== "") {
        return topicFilter === e.topic
      } else {
        return true
      }
    })
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1
      }
      return 1
    })

  return (
    <>
      <section className="w-full">
        <div className="mb-4 flex max-w-[600px] flex-col gap-1">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Writings
          </h3>
          <p className="text-sm text-gray-500">
            Here is where you&apos;ll find tutorials, life updates, and thoughts
            on anything I find interesting.
          </p>
        </div>
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
            {currentPosts.map((post) => (
              <div key={post.title} className="group relative cursor-pointer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="absolute right-0 top-0 m-2 rounded-full border border-transparent p-2 shadow-black duration-150 ease-in group-focus-within:border-gray-200 group-focus-within:bg-white group-focus-within:shadow-sm group-hover:border-gray-200 group-hover:bg-white group-hover:shadow-sm">
                      <Link href={`/mind/blog/${post.slug}`}>
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      Read full blog post
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Link className="z-0" href={`/mind/blog/${post.slug}`}>
                  <MindCard key={post.title} data={{
                    type: "Blog",
                    title: post.title,
                    publishedAt: post.publishedAt,
                    summary: post.summary,
                    topic: post.topic as string
                  }} page={"Blog"} />
                </Link>
              </div>
            ))}
          </div>
        ) : topicFilter !== "" || searchFilter !== "" ? (
          <span className="text-gray-500">
            No blog posts exists with the current filter/s selected
          </span>
        ) : (
          <span className="text-gray-500">No blog posts found</span>
        )}
      </section>

      <section className="flex w-full flex-col gap-6 lg:w-3/12">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Browse Topics
            </h3>
          </div>

          <div className="flex flex-col border-l-2 border-gray-400 pl-4">
            {topics.map((item) => (
              <div
                className={cn(
                  topicFilter !== item
                    ? "text-black/80"
                    : "font-semibold text-black",
                  "hover:cursor-pointer hover:text-black"
                )}
                onClick={() => setTopicFilter(topicFilter === item ? "" : item)}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Search
          </h3>
          <Input
            placeholder={"Search content"}
            value={searchEntry}
            onChange={(e) => setSearchEntry(e.target.value)}
          />
          <button
            onClick={() => setSearchFilter(searchEntry.toLowerCase())}
            className="border-gray-300/7 shadow-inner-[1px] rounded-md border bg-gray-100 p-2 text-sm font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:block"
          >
            Search
          </button>
        </div>
        {(topicFilter !== "" || searchEntry !== "" || searchEntry !== "") && (
          <div
            className="text-sm hover:cursor-pointer hover:underline"
            onClick={() => {
              setTopicFilter("")
              setSearchEntry("")
              setSearchFilter("")
            }}
          >
            reset all filters
          </div>
        )}
      </section>
    </>
  )
}
