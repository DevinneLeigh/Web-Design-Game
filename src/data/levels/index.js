import { world1 } from "./world1"
import { world2 } from "./world2"

import { playerProject } from "./player-project"

export { playerProject }

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


export const allLevels = [
  ...world1,
  ...world2,
  ...playerProject
]

