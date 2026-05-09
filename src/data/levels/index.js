import { htmlLevels } from "./htmlLevels"
import { cssLevels } from "./cssLevels"

import { playerProject } from "./playerProject"

export { playerProject }

export const worlds = [
  {
    id: "html-levels",
    name: "HTML Levels",
    levels: htmlLevels
  },
  {
    id: "css-levels",
    name: "CSS Levels",
    levels: cssLevels
  }
]


export const allLevels = [
  ...htmlLevels,
  ...cssLevels,
  ...playerProject
]


