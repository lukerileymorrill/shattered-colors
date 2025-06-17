"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Music, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import big_red from "@/public/images/pics/big_red.png"
import young_king from "@/public/images/pics/young_king.jpg"
import anthony from "@/public/images/pics/anthony.jpg"
import steve from "@/public/images/pics/steve.jpg"
import taylor from "@/public/images/pics/taylor.jpg"

// Sample data
const shows = [
  {
    date: "June 21, 2025",
    day: "Saturday",
    venue: "Shattered Colors Live at Angel's Rock Bar",
    location: "PowerPlant Live",
    link: "https://www.eventbrite.com/e/skor-with-dameon-crimson-orchid-after-auroras-shattered-colors-tickets-1365595194989?aff=oddtdtcreator"
  },
  {
    date: "October 26, 2025",
    day: "Sunday",
    venue: "Shattered Colors Live at Skull House Music and Tattoo Festival",
    location: "Dundalk, MD",
    link: "https://www.eventbrite.com/e/skull-house-rock-tickets-1264177973349?aff=oddtdtcreator"
  }
]

const albums = [
  {
    title: "Dark Minds",
    year: "Coming Soon...",
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
    photo: big_red,
    bio: "Adam Snyder has been a passionate vocalist for over a decade, with music deeply woven into every part of his life—from singing and DJing to running live sound. His keen ear and technical skills have made him not only a standout performer but also a sought-after sound technician. With a strong background in audio tech, theater and four years of experience as an electrician, Adam brings both creativity and precision to everything he does. Adam formed the band in late 2022, but then reformed the group in early 2025. He is in charge of social media, branding, and band/tour management." 
  },
  {
    name: "Luke",
    instrument: "Guitar",
    photo: young_king,
    bio: "Luke Morrill is a versatile guitarist with over 10 years of experience, blending styles from jazz, rock, and blues to create a sound all his own. His deep musicality spans a wide range of genres, making him a dynamic and expressive performer. Off the stage, Luke brings his sharp mind to the world of tech—he's spent the last 5 years immersed in computer science, handling everything from web design to coding with outstanding skill. Whether he's playing a solo or building a site, Luke delivers with creativity and precision. Luke has been performing live for over 4 years with multiple groups, but landed home here in 2023! Luke handles all websites, coding, as well as lights and performance FX! "},
  {
    name: "Anthony",
    instrument: "Guitar",
    photo: anthony,
    bio: "Anthony Yanez is the newest guitarist to join the group, bringing over 12 years of guitar experience and a wealth of talent to the team. Originally from Fresno, CA, Anthony moved with his wife to Catonsville, MD, for work and has since embarked on a new musical journey with the band in Baltimore. A seasoned player with a background in various groups back home, Anthony is known for his exceptional skill across all aspects of guitar and band dynamics. His diverse experience and passion for music make him a standout addition to the group. Anthony is in charge of all booking and logistics for the group. He also assists with band/tour management."},
  {
    name: "Stephen",
    instrument: "Bass",
    photo: steve,
    bio: "Stephen Snyder began his music journey in the early 90s, playing drums and guitar in high school bands. After taking a break to build a family, he made a triumphant return to music, this time as a bass player, making a significant comeback. With a rich musical background and a diverse skill set, Stephen's talent spans multiple instruments and genres. By day, he works full-time to provide for his family, but by night, he's back on stage, showcasing his passion and dedication to music.Stephen is in charge of all business aspects of the band and project. All copyrighting, marketing, and logistics."},
  {
    name: "Taylor",
    instrument: "Drums",
    photo: taylor,
    bio: "Taylor Giles is a masterful drummer with over 12 years of experience, having started her musical journey as a child, inspired by her father's dream of drumming. Her talent behind the kit is matched only by her passion for animals. Taylor is a dedicated animal lover, with a special focus on rescuing and sheltering a wide range of creatures, from lizards and spiders to dogs. Whether she's laying down a groove or caring for her furry and scaly friends, Taylor brings a big heart and fierce dedication to everything she does. Taylor joined the group in late 2024 to fill our sound on the drums. She is in charge of all art, merchandise, and designs for the band! "}
]

const pastEvents = [
  {
    date: "June 6, 2025",
    day: "Friday",
    venue: "Shattered Colors Live at Morsebergers @ 7",
    location: "Baltimore, MD",
  },
]

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <header
          className={`fixed w-full bg-black/80 backdrop-blur-sm z-50 transition-all duration-1000`}
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
              <Link href="#shows" className="text-white hover:text-[#15c0eb] transition">
                Upcoming Events
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
              className="object-contain animate-pulse-subtle bg-black"
              priority
            />
          </div>
          {/* Mobile buttons below image */}
          <div className="flex sm:hidden flex-col gap-4 px-4 mt-4 animate-fade-in-up animation-delay-600 z-10 w-full absolute bottom-8 left-0">
            <Link href="#music" scroll={true}>
              <Button className="bg-[#15c0eb] hover:bg-[#15c0eb]/80 text-white animate-pulse-button w-full">
                Latest Release
              </Button>
            </Link>
            <Link href="#shows" scroll={true}>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 w-full">
                Upcoming Shows
              </Button>
            </Link>
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up font-metal tracking-wider flex flex-col items-center">
              <span className="text-[#15c0eb] animate-color-shift">Shattered</span>
              <span className="animate-glitch">Colors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">

            </p>
            {/* Desktop buttons */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link href="#music" scroll={true}>
                <Button className="bg-[#15c0eb] hover:bg-[#15c0eb]/80 text-white animate-pulse-button">
                  Latest Release
                </Button>
              </Link>
              <Link href="#shows" scroll={true}>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Upcoming Shows
                </Button>
              </Link>
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
                  {show.link && (
                    <Link href={show.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#15c0eb] hover:bg-[#1563eb] text-white">Get Tickets</Button>
                    </Link>
                  )}
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

        {/* Music Section (Replaced) */}
        <section id="music" className="py-20 bg-gradient-to-b from-black to-[#15c0eb]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Coming soon: <span className="text-[#15c0eb]">Dark Minds</span></h2>
            <div className="flex justify-center">
              <div style={{maxWidth:540, width:'100%'}}>
                <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DKU8XNQuR0M/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background:'#FFF', border:0, borderRadius:3, boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', minWidth:326, padding:0, width:'99.375%' }}></blockquote>
              </div>
            </div>
            <script async src="//www.instagram.com/embed.js"></script>
          </div>
        </section>

        {/* Sneak Peek Instagram Embed */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sneak Peek</h2>
            <div className="flex justify-center">
              <div style={{maxWidth:540, width:'100%'}}>
                <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DKU8XNQuR0M/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background:'#FFF', border:0, borderRadius:3, boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', minWidth:326, padding:0, width:'99.375%' }}></blockquote>
              </div>
            </div>
            <script async src="//www.instagram.com/embed.js"></script>
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

        {/* Past Events Section */}
        <section id="past-events" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Past <span className="text-[#15c0eb]">Events</span>
            </h2>
            <div className="grid gap-4 md:gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-zinc-800 transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="text-center md:text-left">
                      <div className="text-xl font-bold text-[#15c0eb]">{event.date}</div>
                      <div className="text-sm text-gray-400">{event.day}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{event.venue}</h3>
                      <p className="text-gray-400">{event.location}</p>
                    </div>
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
    </>
  )
}
