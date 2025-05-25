"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Music, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SplashScreen from "@/components/splash-screen"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Simulate loading time and then show the main content
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Handle animation completion
  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  return (
    <>
      {loading ? (
        <SplashScreen onComplete={handleAnimationComplete} />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Navigation */}
          <header
            className={`fixed w-full bg-black/80 backdrop-blur-sm z-50 transition-all duration-1000 ${animationComplete ? "opacity-100" : "opacity-0"}`}
          >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/shattered-colors-logo.png"
                  alt="Shattered Colors"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="#home" className="text-white hover:text-[#15c0eb] transition">
                  Home
                </Link>
                <Link href="#shows" className="text-white hover:text-[#15c0eb] transition">
                  Shows
                </Link>
                <Link href="#music" className="text-white hover:text-[#15c0eb] transition">
                  Music
                </Link>
                <Link href="#band" className="text-white hover:text-[#15c0eb] transition">
                  Band
                </Link>
                <Link href="#contact" className="text-white hover:text-[#15c0eb] transition">
                  Contact
                </Link>
              </nav>
              <Button variant="outline" className="md:hidden">
                Menu
              </Button>
            </div>
          </header>

          {/* Hero Section */}
          <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-black/70 z-10" />
              <Image
                src="/images/cachedImage.jpg"
                alt="Shattered Colors Band"
                fill
                className="object-cover animate-pulse-subtle"
                priority
              />
            </div>
            <div className="container mx-auto px-4 z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up font-metal tracking-wider flex flex-col items-center">
                <span className="text-[#15c0eb] animate-color-shift">Shattered</span>
                <span className="animate-glitch">Colors</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
                <Button className="bg-[#15c0eb] hover:bg-[#15c0eb]/80 text-white animate-pulse-button">
                  Latest Album
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Upcoming Shows
                </Button>
              </div>
            </div>
          </section>

          {/* Upcoming Shows */}
          <section id="shows" className="py-20 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Upcoming <span className="text-[#15c0eb]">Shows</span>
              </h2>
              <div className="grid gap-4 md:gap-6">
                {shows.map((show, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-zinc-800 transition-all duration-300 transform hover:scale-[1.01]"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <div className="text-center md:text-left">
                        <div className="text-xl font-bold text-[#15c0eb]">{show.date}</div>
                        <div className="text-sm text-gray-400">{show.day}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{show.venue}</h3>
                        <p className="text-gray-400">{show.location}</p>
                      </div>
                    </div>
                    <Link href="https://www.eventbrite.com/e/reign-of-z-the-almas-beautiful-disatour-morsbergers-tavern-tickets-1276361635009?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#15c0eb] hover:bg-[#1563eb] text-white">Get Tickets</Button>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  View All Shows
                </Button>
              </div>
            </div>
          </section>

          {/* Music Section */}
          <section id="music" className="py-20 bg-gradient-to-b from-black to-[#15c0eb]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Our <span className="text-[#15c0eb]">Music</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, index) => (
                  <Card
                    key={index}
                    className="bg-zinc-900 border-none overflow-hidden hover:shadow-[0_0_15px_rgba(21,192,235,0.5)] transition-all duration-500"
                  >
                    <div className="relative aspect-square">
                      <Image src={album.cover || "/placeholder.svg"} alt={album.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{album.title}</h3>
                      <p className="text-gray-400 mb-4">{album.year}</p>
                      <div className="flex gap-3 mt-4">
                        <Link
                          href={album.links?.spotify || "#"}
                          className="text-white hover:text-green-400 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527" />
                            <path d="M9 15c1.5-.5 3-.5 4.5.5" />
                            <path d="M7 9c2-1 6-2 10 .5" />
                          </svg>
                          <span className="sr-only">Spotify</span>
                        </Link>
                        <Link
                          href={album.links?.youtube || "#"}
                          className="text-white hover:text-red-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                          >
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                            <path d="m10 15 5-3-5-3z" />
                          </svg>
                          <span className="sr-only">YouTube</span>
                        </Link>
                        <Link
                          href={album.links?.apple || "#"}
                          className="text-white hover:text-pink-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="M9.5 14.5 9 17l3-1 3 1-.5-2.5" />
                            <path d="M7 10a5 5 0 0 1 10 0" />
                            <line x1="8" x2="16" y1="8" y2="8" />
                            <line x1="8" x2="16" y1="12" y2="12" />
                            <line x1="8" x2="16" y1="16" y2="16" />
                          </svg>
                          <span className="sr-only">Apple Music</span>
                        </Link>
                        <Link
                          href={album.links?.bandcamp || "#"}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                          >
                            <path d="M6 15h12l-7 4-5-4z" />
                            <path d="M9 5h10l-7 4-3-4z" />
                          </svg>
                          <span className="sr-only">Bandcamp</span>
                        </Link>
                        <Link
                          href={album.links?.soundcloud || "#"}
                          className="text-white hover:text-orange-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                          >
                            <path d="M4 17h2.5" />
                            <path d="M2 8v9" />
                            <path d="M7 8v9h2v-9" />
                            <path d="M11 8v9h2v-9" />
                            <path d="M16 8v9h2v-9" />
                            <path d="M20 8v9h2v-9" />
                          </svg>
                          <span className="sr-only">SoundCloud</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Band Members */}
          <section id="band" className="py-20 bg-gradient-to-b from-[#15c0eb] to-black">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Meet the Band
              </h2>
              <div className="space-y-16">
                {bandMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden group hover:shadow-[0_0_20px_rgba(21,192,235,0.6)] transition-all duration-500">
                        <Image
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-all duration-700"
                        />
                      </div>
                    </div>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-lg mb-4">{member.instrument}</p>
                      <p className="text-white">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Get in <span className="text-[#15c0eb]">Touch</span>
              </h2>
              <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Booking & Press</h3>
                  <p className="text-gray-300 mb-6">
                    For booking inquiries, interviews, or press opportunities, please contact our management team.
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong>Email:</strong> shatteredcolorsofficial@gmail.com
                    </p>
                    <p>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  <p className="text-gray-300 mb-6">
                    Stay connected with Shattered Colors on social media for the latest updates, behind-the-scenes
                    content, and more.
                  </p>
                  <div className="flex gap-4">
                    <Link href="#" className="text-white hover:text-[#15c0eb] transition transform hover:scale-110">
                      <Instagram size={24} />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-white hover:text-[#15c0eb] transition transform hover:scale-110">
                      <Facebook size={24} />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-white hover:text-[#15c0eb] transition transform hover:scale-110">
                      <Youtube size={24} />
                      <span className="sr-only">YouTube</span>
                    </Link>
                    <Link href="#" className="text-white hover:text-[#15c0eb] transition transform hover:scale-110">
                      <Music size={24} />
                      <span className="sr-only">Spotify</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-16 bg-gradient-to-b from-black to-[#15c0eb]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Mailing List</h2>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Subscribe to get exclusive updates, early access to tickets, and special offers.
              </p>
              <form className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#15c0eb]"
                  required
                />
                <Button className="bg-white text-[#15c0eb] hover:bg-gray-100">Subscribe</Button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 bg-black border-t border-white/10">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-white mb-4 md:mb-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/images/shattered-colors-logo.png"
                      alt="Shattered Colors"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <div className="flex gap-6">
                  <Link href="#home" className="text-gray-400 hover:text-white transition text-sm">
                    Home
                  </Link>
                  <Link href="#shows" className="text-gray-400 hover:text-white transition text-sm">
                    Shows
                  </Link>
                  <Link href="#music" className="text-gray-400 hover:text-white transition text-sm">
                    Music
                  </Link>
                  <Link href="#band" className="text-gray-400 hover:text-white transition text-sm">
                    Band
                  </Link>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition text-sm">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Shattered Colors. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

// Sample data
const shows = [
  {
    date: "June 6",
    day: "Friday",
    venue: "Morsebergers",
    location: "Catonsville, MD",
  },
]

const albums = [
  {
    title: "Dark Minds",
    year: "2023",
    cover: "/placeholder.svg?height=500&width=500",
    links: {
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
      apple: "https://music.apple.com",
      bandcamp: "https://bandcamp.com",
      soundcloud: "https://soundcloud.com",
    },
  },
  {
    title: "PlaceHolder",
    year: "2021",
    cover: "/placeholder.svg?height=500&width=500",
    links: {
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
      apple: "https://music.apple.com",
      bandcamp: "https://bandcamp.com",
      soundcloud: "https://soundcloud.com",
    },
  },
  {
    title: "PlaceHolder",
    year: "2019",
    cover: "/placeholder.svg?height=500&width=500",
    links: {
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
      apple: "https://music.apple.com",
      bandcamp: "https://bandcamp.com",
      soundcloud: "https://soundcloud.com",
    },
  },
]

const bandMembers = [
  {
    name: "Adam",
    instrument: "Vocals",
    photo: "/placeholder.svg?height=300&width=300",
    bio: "Adam Snyder has been a passionate vocalist for over a decade, with music deeply woven into every part of his life—from singing and DJing to running live sound. His keen ear and technical skills have made him not only a standout performer but also a sought-after sound technician. With a strong background in audio tech, theater and four years of experience as an electrician, Adam brings both creativity and precision to everything he does. Adam formed the band in late 2022, but then reformed the group in early 2025. He is in charge of social media, branding, and band/tour management." 
  },
  {
    name: "Luke",
    instrument: "Guitar",
    photo: "/placeholder.svg?height=300&width=300",
    bio: "Luke Morrill is a versatile guitarist with over 10 years of experience, blending styles from jazz, rock, and blues to create a sound all his own. His deep musicality spans a wide range of genres, making him a dynamic and expressive performer. Off the stage, Luke brings his sharp mind to the world of tech—he’s spent the last 5 years immersed in computer science, handling everything from web design to coding with outstanding skill. Whether he's playing a solo or building a site, Luke delivers with creativity and precision. Luke has been performing live for over 4 years with multiple groups, but landed home here in 2023! Luke handles all websites, coding, as well as lights and performance FX! "},
  {
    name: "Anthony",
    instrument: "Guitar",
    photo: "/placeholder.svg?height=300&width=300",
    bio: "Anthony Yanez is the newest guitarist to join the group, bringing over 12 years of guitar experience and a wealth of talent to the team. Originally from Fresno, CA, Anthony moved with his wife to Catonsville, MD, for work and has since embarked on a new musical journey with the band in Baltimore. A seasoned player with a background in various groups back home, Anthony is known for his exceptional skill across all aspects of guitar and band dynamics. His diverse experience and passion for music make him a standout addition to the group. Anthony is in charge of all booking and logistics for the group. He also assists with band/tour management."},
  {
    name: "Stephen",
    instrument: "Bass",
    photo: "/placeholder.svg?height=300&width=300",
    bio: "Stephen Snyder began his music journey in the early 90s, playing drums and guitar in high school bands. After taking a break to build a family, he made a triumphant return to music, this time as a bass player, making a significant comeback. With a rich musical background and a diverse skill set, Stephen’s talent spans multiple instruments and genres. By day, he works full-time to provide for his family, but by night, he’s back on stage, showcasing his passion and dedication to music.Stephen is in charge of all business aspects of the band and project. All copyrighting, marketing, and logistics."},
  {
    name: "Taylor",
    instrument: "Drums",
    photo: "/placeholder.svg?height=300&width=300",
    bio: "Taylor Giles is a masterful drummer with over 12 years of experience, having started her musical journey as a child, inspired by her father’s dream of drumming. Her talent behind the kit is matched only by her passion for animals. Taylor is a dedicated animal lover, with a special focus on rescuing and sheltering a wide range of creatures, from lizards and spiders to dogs. Whether she’s laying down a groove or caring for her furry and scaly friends, Taylor brings a big heart and fierce dedication to everything she does. Taylor joined the group in late 2024 to fill our sound on the drums. She is in charge of all art, merchandise, and designs for the band! "}
]
