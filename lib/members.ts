/**
 * Band members, in the order they render on /bios.
 *
 * TODO (photos): `public/images/pics/` also has `big_red.jpg`, which isn't used
 * here. Confirm who's who — in particular whether Adam is `young_king.jpg` or
 * `big_red.jpg` — and swap the `image` paths if this got it wrong.
 * TODO (copy): the `bio` lines below only restate what's already on the home
 * page. Replace them with real bios.
 */
export type Member = {
  name: string
  role: string
  image: string
  bio: string
}

export const members: Member[] = [
  {
    name: "Stephen Snyder",
    role: "Bass & Vocals",
    image: "/images/pics/steve.jpg",
    bio: "Co-founded Shattered Colors in the basement he shares with his son Adam. Holds down the low end and splits vocal duties.",
  },
  {
    name: "Adam Snyder",
    role: "Vocals",
    image: "/images/pics/young_king.jpg",
    bio: "The other half of the band's founding father-and-son pair, and the voice out front.",
  },
  {
    name: "Anthony Yanez",
    role: "Lead Guitar",
    image: "/images/pics/anthony.jpg",
    bio: "Joined early on to handle lead guitar — the riffs and solos driving the band's modern rock/metal sound.",
  },
  {
    name: "Taylor Giles",
    role: "Drums",
    image: "/images/pics/taylor.jpg",
    bio: "Rounds out the lineup behind the kit, keeping the whole thing locked in and loud.",
  },
]
