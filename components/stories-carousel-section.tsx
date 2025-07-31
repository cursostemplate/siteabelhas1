"use client"
import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
  StoryAuthorName,
  StoryOverlay,
  StoryVideo,
} from "@/components/ui/stories-carousel"

const stories = [
  {
    id: 1,
    author: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40&q=alex",
    fallback: "AJ",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=20",
  },
  {
    id: 2,
    author: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40&q=sarah",
    fallback: "SC",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=20",
  },
  {
    id: 3,
    author: "Mike Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40&q=mike",
    fallback: "MR",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    author: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40&q=emma",
    fallback: "EW",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    author: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40&q=david",
    fallback: "DK",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 6,
    author: "Ana Beatriz",
    avatar: "/placeholder.svg?height=40&width=40&q=ana",
    fallback: "AB",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 7,
    author: "Carlos Silva",
    avatar: "/placeholder.svg?height=40&width=40&q=carlos",
    fallback: "CS",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4#t=20",
  },
]

export function StoriesCarouselSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Histórias do Nosso Meliponário</h2>
        <Stories>
          <StoriesContent>
            {stories.map((story) => (
              <Story className="aspect-[3/4] w-[200px]" key={story.id}>
                <StoryVideo src={story.video} />
                <StoryOverlay />
                <StoryAuthor>
                  <StoryAuthorImage fallback={story.fallback} name={story.author} src={story.avatar} />
                  <StoryAuthorName>{story.author}</StoryAuthorName>
                </StoryAuthor>
              </Story>
            ))}
          </StoriesContent>
        </Stories>
      </div>
    </section>
  )
}
