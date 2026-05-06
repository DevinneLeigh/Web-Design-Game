// stores/levelStore.js
import { defineStore } from 'pinia'
import { htmlLevels as htmlLevelsData } from '@/data/levels/htmlLevels'
import { cssLevels as cssLevelsData } from '@/data/levels/cssLevels'
import { playerProject as playerProjectData } from '@/data/levels/playerProject'
import { levelProgression } from '@/stores/levelProgression'

function initializeCategory(category, categoryKey) {
  return category.map(level => ({
    ...level,
    categoryKey,
    unlocked: level.defaultUnlocked ?? false,
    completed: false
  }))
}

function mergeCategoryData(base, saved) {
  return base.map(baseLevel => {
    const savedLevel = saved?.find(l => l.id === baseLevel.id)

    return {
      ...baseLevel,
      unlocked: savedLevel?.unlocked ?? baseLevel.defaultUnlocked ?? false,
      completed: savedLevel?.completed ?? false
    }
  })
}

export const useLevelStore = defineStore('levels', {
  state: () => ({
    categories: {
        htmlLevels: initializeCategory(htmlLevelsData, "htmlLevels"),
        cssLevels: initializeCategory(cssLevelsData, "cssLevels"),
        playerProject: initializeCategory(playerProjectData, "playerProject")
    }
  }),

  actions: {
    save() {
        localStorage.setItem('levelStore', JSON.stringify(this.categories))
    },

    load() {
        const saved = localStorage.getItem('levelStore')
        if (!saved) return

        const parsed = JSON.parse(saved)

        this.categories = {
            htmlLevels: mergeCategoryData(htmlLevelsData, parsed.htmlLevels),
            cssLevels: mergeCategoryData(cssLevelsData, parsed.cssLevels),
            playerProject: mergeCategoryData(playerProjectData, parsed.playerProject)
        }
    },

    applyUnlockRules() {
        const rules = levelProgression.unlocks
        if (!rules) return

        for (const rule of rules) {
            const allMet = rule.requires.every(id =>
            this.isLevelCompleted(id)
            )

            if (!allMet) continue

            for (const unlockId of rule.unlocks) {
              const level = this.findLevelById(unlockId)
              if (!level) {
                console.warn("Level not found:", unlockId)
              }
              else {
                level.unlocked = true
              }
            }
        }
    },

    isLevelCompleted(id) {
        for (const category of Object.values(this.categories)) {
            const level = category.find(l => l.id === id)
            if (level?.completed) return true
        }
        return false
    },

    findLevelById(id) {
        for (const category of Object.values(this.categories)) {
            const level = category.find(l => l.id === id)
            if (level) return level
        }
    },

    completeLevel(categoryKey, levelId) {
        const level = this.findLevelById(levelId)
        if (!level) return

        level.completed = true

        this.applyUnlockRules() 
        this.save()
    }
  }
})