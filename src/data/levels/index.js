import { world1 } from "./world1"
import { world2 } from "./world2"
import { landingPage } from "./landing-page"

export const worlds = [
  {
    id: "world-1",
    name: "HTML Basics World 1",
    levels: world1
  },
  {
    id: "world-2",
    name: "CSS Basics World 2",
    levels: world2
  }
]

// Flattened list (useful for lookup by id)
export const allLevels = [
  ...world1,
  ...world2
]

// Landing page is separate
export const playerProject = landingPage