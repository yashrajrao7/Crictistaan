"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus, SlidersHorizontal, Check, ChevronDown, Star, Search } from "lucide-react"

// Content type definitions
type Show = {
  id: number
  title: string
  genre: string
  language: string
  image: string
  description: string
  rating: number
  year: number
  platforms: string[]
}

type Category = {
  id: string
  title: string
  isOpen: boolean
}

type FilterState = {
  genres: string[]
  languages: string[]
  yearRange: [number, number]
  minRating: number
  platforms: string[]
  searchKeyword: string
}

export default function Home() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("tv-shows")

  // State for added shows
  const [addedShows, setAddedShows] = useState<number[]>([])

  // State for filter categories
  const [categories, setCategories] = useState<Category[]>([
    { id: "genres", title: "Genres", isOpen: false },
    { id: "language", title: "Language", isOpen: false },
    { id: "release-year", title: "Release year", isOpen: false },
    { id: "rating", title: "Rating", isOpen: false },
    { id: "where-to-watch", title: "Where to watch", isOpen: false },
    { id: "keywords", title: "Keywords", isOpen: false },
  ])

  // State for filters
  const [filters, setFilters] = useState<FilterState>({
    genres: [],
    languages: [],
    yearRange: [1990, 2025],
    minRating: 0,
    platforms: [],
    searchKeyword: "",
  })

  // Critics Top Rated shows data
  const criticsTopRated: Show[] = [
    {
      id: 1,
      title: "Breaking Bad",
      genre: "Action/Thriller",
      language: "English",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      description:
        "A high school chemistry teacher diagnosed with cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
      rating: 9.5,
      year: 2008,
      platforms: ["Netflix", "Amazon Prime"],
    },
    {
      id: 2,
      title: "Game of Thrones",
      genre: "Action/Drama",
      language: "English",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      rating: 9.2,
      year: 2011,
      platforms: ["HBO Max", "Disney+"],
    },
    {
      id: 3,
      title: "Friends",
      genre: "Sitcom",
      language: "English",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      description:
        "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
      rating: 8.9,
      year: 1994,
      platforms: ["Netflix", "HBO Max"],
    },
    {
      id: 4,
      title: "Brooklyn 99",
      genre: "Sitcom",
      language: "English",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
      description:
        "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
      rating: 8.4,
      year: 2013,
      platforms: ["Netflix", "Hulu"],
    },
  ]

  // Indian Shows data
  const indianShows: Show[] = [
    {
      id: 5,
      title: "Breaking Bad",
      genre: "Action/Thriller",
      language: "Hindi",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      description:
        "A high school chemistry teacher diagnosed with cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
      rating: 9.5,
      year: 2008,
      platforms: ["Netflix", "Amazon Prime"],
    },
    {
      id: 6,
      title: "Scam 1992",
      genre: "Thriller",
      language: "English",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmEtZGRkOC00NDUyLTk5NWEtYzI3NDUxYjQ0N2JiXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
      description:
        "The story of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
      rating: 9.3,
      year: 2020,
      platforms: ["SonyLIV", "Amazon Prime"],
    },
    {
      id: 7,
      title: "Little Things",
      genre: "Drama",
      language: "Hindi",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWQzYWI3ZGMtYzgyYy00OWZkLWEwODYtNGNiMGZiNzQ3YzFkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      description:
        "A cohabiting couple in their 20s navigate the ups and downs of work, modern-day relationships and finding themselves in contemporary Mumbai.",
      rating: 8.2,
      year: 2016,
      platforms: ["Netflix"],
    },
    {
      id: 8,
      title: "Family Man",
      genre: "Thriller",
      language: "Hindi",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
      description:
        "A middle-class man who works for a special cell of the National Investigation Agency tries to protect the nation from terrorism while also keeping his family safe from his secret job.",
      rating: 8.7,
      year: 2019,
      platforms: ["Amazon Prime"],
    },
  ]

  // Additional shows (third row)
  const additionalShows: Show[] = [
    {
      id: 9,
      title: "Breaking Bad",
      genre: "Action/Thriller",
      language: "Hindi",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      description:
        "A high school chemistry teacher diagnosed with cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
      rating: 9.5,
      year: 2008,
      platforms: ["Netflix", "Amazon Prime"],
    },
    {
      id: 10,
      title: "Scam 1992",
      genre: "Thriller",
      language: "English",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmEtZGRkOC00NDUyLTk5NWEtYzI3NDUxYjQ0N2JiXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
      description:
        "The story of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
      rating: 9.3,
      year: 2020,
      platforms: ["SonyLIV", "Amazon Prime"],
    },
    {
      id: 11,
      title: "Little Things",
      genre: "Drama",
      language: "Hindi",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWQzYWI3ZGMtYzgyYy00OWZkLWEwODYtNGNiMGZiNzQ3YzFkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      description:
        "A cohabiting couple in their 20s navigate the ups and downs of work, modern-day relationships and finding themselves in contemporary Mumbai.",
      rating: 8.2,
      year: 2016,
      platforms: ["Netflix"],
    },
    {
      id: 12,
      title: "Family Man",
      genre: "Thriller",
      language: "Hindi",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
      description:
        "A middle-class man who works for a special cell of the National Investigation Agency tries to protect the nation from terrorism while also keeping his family safe from his secret job.",
      rating: 8.7,
      year: 2019,
      platforms: ["Amazon Prime"],
    },
  ]

  // All available genres, languages, and platforms for filters
  const allGenres = ["Action", "Thriller", "Drama", "Sitcom", "Comedy", "Romance", "Sci-Fi", "Fantasy"]
  const allLanguages = ["English", "Hindi", "Spanish", "Korean", "Japanese"]
  const allPlatforms = ["Netflix", "Amazon Prime", "Disney+", "HBO Max", "Hulu", "SonyLIV"]

  // Toggle show to watchlist
  const toggleAddShow = (id: number) => {
    setAddedShows((prev) => (prev.includes(id) ? prev.filter((showId) => showId !== id) : [...prev, id]))
  }

  // Toggle filter category
  const toggleCategory = (id: string) => {
    setCategories((prev) =>
      prev.map((category) => (category.id === id ? { ...category, isOpen: !category.isOpen } : category)),
    )
  }

  // Update filters
  const updateFilter = (type: keyof FilterState, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }))
  }

  // Toggle genre filter
  const toggleGenreFilter = (genre: string) => {
    setFilters((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre) ? prev.genres.filter((g) => g !== genre) : [...prev.genres, genre],
    }))
  }

  // Toggle language filter
  const toggleLanguageFilter = (language: string) => {
    setFilters((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }))
  }

  // Toggle platform filter
  const togglePlatformFilter = (platform: string) => {
    setFilters((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }))
  }

  // Scroll section horizontally
  const scrollSection = (sectionId: string, direction: "left" | "right") => {
    const section = document.getElementById(sectionId)
    if (section) {
      const scrollAmount = direction === "left" ? -400 : 400
      section.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4b0082] to-[#2e0854] text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Navigation Tabs */}
        <div className="mb-8 rounded-full bg-[#1a1a1a]/30 p-1 flex items-center justify-start max-w-4xl mx-auto">
          <button
            className={`px-6 py-2 rounded-full transition-colors ${activeTab === "movies" ? "bg-[#f5c518] text-black font-medium" : "text-white hover:bg-[#ffffff]/10"}`}
            onClick={() => setActiveTab("movies")}
          >
            Movies
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${activeTab === "tv-shows" ? "bg-[#f5c518] text-black font-medium" : "text-white hover:bg-[#ffffff]/10"}`}
            onClick={() => setActiveTab("tv-shows")}
          >
            TV Shows
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${activeTab === "documentaries" ? "bg-[#f5c518] text-black font-medium" : "text-white hover:bg-[#ffffff]/10"}`}
            onClick={() => setActiveTab("documentaries")}
          >
            Documentaries
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${activeTab === "anime" ? "bg-[#f5c518] text-black font-medium" : "text-white hover:bg-[#ffffff]/10"}`}
            onClick={() => setActiveTab("anime")}
          >
            Anime
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filters */}
          <div className="w-full md:w-48 md:mr-6 mb-6 md:mb-0">
            <div className="flex items-center mb-6">
              <h3 className="text-[#a3a3a3] font-medium">Filters</h3>
              <SlidersHorizontal size={16} className="ml-2 text-[#a3a3a3]" />
            </div>

            {/* Filter Categories */}
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id}>
                  <FilterCategory
                    title={category.title}
                    isOpen={category.isOpen}
                    onClick={() => toggleCategory(category.id)}
                  />

                  {/* Filter Options */}
                  {category.isOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {category.id === "genres" && (
                        <div className="space-y-2">
                          {allGenres.map((genre) => (
                            <label key={genre} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filters.genres.includes(genre)}
                                onChange={() => toggleGenreFilter(genre)}
                                className="rounded text-[#f5c518] focus:ring-[#f5c518]"
                              />
                              <span className="text-sm">{genre}</span>
                            </label>
                          ))}
                        </div>
                      )}

                      {category.id === "language" && (
                        <div className="space-y-2">
                          {allLanguages.map((language) => (
                            <label key={language} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filters.languages.includes(language)}
                                onChange={() => toggleLanguageFilter(language)}
                                className="rounded text-[#f5c518] focus:ring-[#f5c518]"
                              />
                              <span className="text-sm">{language}</span>
                            </label>
                          ))}
                        </div>
                      )}

                      {category.id === "release-year" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{filters.yearRange[0]}</span>
                            <span>{filters.yearRange[1]}</span>
                          </div>
                          <input
                            type="range"
                            min="1990"
                            max="2025"
                            value={filters.yearRange[1]}
                            onChange={(e) =>
                              updateFilter("yearRange", [filters.yearRange[0], Number.parseInt(e.target.value)])
                            }
                            className="w-full accent-[#f5c518]"
                          />
                        </div>
                      )}

                      {category.id === "rating" && (
                        <div className="space-y-2">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Star
                                key={rating}
                                size={16}
                                className={`cursor-pointer ${rating <= filters.minRating ? "text-[#f5c518] fill-[#f5c518]" : "text-gray-400"}`}
                                onClick={() => updateFilter("minRating", rating)}
                              />
                            ))}
                            <span className="ml-2 text-sm">& up</span>
                          </div>
                        </div>
                      )}

                      {category.id === "where-to-watch" && (
                        <div className="space-y-2">
                          {allPlatforms.map((platform) => (
                            <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filters.platforms.includes(platform)}
                                onChange={() => togglePlatformFilter(platform)}
                                className="rounded text-[#f5c518] focus:ring-[#f5c518]"
                              />
                              <span className="text-sm">{platform}</span>
                            </label>
                          ))}
                        </div>
                      )}

                      {category.id === "keywords" && (
                        <div className="space-y-2">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Search keywords..."
                              value={filters.searchKeyword}
                              onChange={(e) => updateFilter("searchKeyword", e.target.value)}
                              className="w-full py-1 px-2 pr-8 bg-[#1a1a1a]/50 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#f5c518]"
                            />
                            <Search
                              size={14}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Critics Top Rated Section */}
            <ShowsSection
              id="critics-top-rated"
              title="Critics Top Rated"
              shows={criticsTopRated}
              addedShows={addedShows}
              onAddShow={toggleAddShow}
              onScroll={scrollSection}
            />

            {/* Indian Shows Section */}
            <ShowsSection
              id="indian-shows"
              title="Indian Shows"
              shows={indianShows}
              addedShows={addedShows}
              onAddShow={toggleAddShow}
              onScroll={scrollSection}
            />

            {/* Additional Shows (Third Row) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalShows.map((show) => (
                <ShowCard
                  key={show.id}
                  show={show}
                  isAdded={addedShows.includes(show.id)}
                  onAddShow={() => toggleAddShow(show.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterCategory({ title, isOpen, onClick }: { title: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className="flex items-center justify-between cursor-pointer hover:bg-[#ffffff]/5 p-2 rounded-md transition-colors"
      onClick={onClick}
    >
      <span className="text-white">{title}</span>
      {isOpen ? (
        <ChevronDown size={16} className="text-[#a3a3a3]" />
      ) : (
        <ChevronRight size={16} className="text-[#a3a3a3]" />
      )}
    </div>
  )
}

function ShowsSection({
  id,
  title,
  shows,
  addedShows,
  onAddShow,
  onScroll,
}: {
  id: string
  title: string
  shows: Show[]
  addedShows: number[]
  onAddShow: (id: number) => void
  onScroll: (id: string, direction: "left" | "right") => void
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <span className="text-[#f5c518] mr-2">•</span>
        <h2 className="text-white text-xl font-medium">{title}</h2>
        <ChevronRight size={18} className="ml-2 text-[#f5c518]" />

        <div className="ml-auto flex space-x-2">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50 transition-colors"
            onClick={() => onScroll(id, "left")}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50 transition-colors"
            onClick={() => onScroll(id, "right")}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        id={id}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto pb-2 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {shows.map((show) => (
          <ShowCard
            key={show.id}
            show={show}
            isAdded={addedShows.includes(show.id)}
            onAddShow={() => onAddShow(show.id)}
          />
        ))}
      </div>
    </div>
  )
}

function ShowCard({
  show,
  isAdded,
  onAddShow,
}: {
  show: Show
  isAdded: boolean
  onAddShow: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#2e0854] to-[#1a0836] transition-transform hover:scale-[1.02] hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Add button */}
      <button
        className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center ${isAdded ? "bg-[#f5c518] text-black" : "bg-[#1a1a1a]/70 text-white"} rounded-md z-20 transition-colors`}
        onClick={(e) => {
          e.stopPropagation()
          onAddShow()
        }}
      >
        {isAdded ? <Check size={16} /> : <Plus size={16} />}
      </button>

      {/* Poster Image */}
      <div className="aspect-[2/3] bg-[#1a1a1a]/50 relative">
        <Image src={show.image || "/placeholder.svg"} alt={show.title} fill className="object-cover" />

        {/* Description Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 flex flex-col justify-end z-10 transition-opacity duration-200">
            <h3 className="font-medium text-white text-lg">{show.title}</h3>
            <div className="flex items-center mt-1 mb-2">
              <div className="flex items-center">
                <Star size={14} className="text-[#f5c518] fill-[#f5c518]" />
                <span className="ml-1 text-sm">{show.rating}</span>
              </div>
              <span className="mx-2 text-xs">•</span>
              <span className="text-sm">{show.year}</span>
            </div>
            <p className="text-sm text-gray-200 line-clamp-3">{show.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {show.platforms.map((platform) => (
                <span key={platform} className="text-xs px-1.5 py-0.5 bg-[#1a1a1a]/70 rounded-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-medium text-white mb-1">{show.title}</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2 py-0.5 rounded-sm bg-[#1a1a1a]/50 text-[#dfdfdf]">{show.genre}</span>
          <span className="text-xs px-2 py-0.5 rounded-sm bg-[#1a1a1a]/50 text-[#dfdfdf]">{show.language}</span>
        </div>
      </div>
    </div>
  )
}

