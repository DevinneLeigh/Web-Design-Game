// stores/levelStore.js
import { defineStore } from 'pinia'
import { world1 as world1Data } from '@/data/levels/world1'
import { world2 as world2Data } from '@/data/levels/world2'
import { playerProject as playerProjectData } from '@/data/levels/player-project'
import { useRoute } from 'vue-router'

function initializeWorld(world, worldKey) {
  return world.map(level => ({
    ...level,
    worldKey,
    unlocked: level.defaultUnlocked ?? true,
    completed: false
  }))
}

function mergeWorldData(base, saved) {
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
    worlds: {
        world1: initializeWorld(world1Data, "world1"),
        world2: initializeWorld(world2Data, "world2"),
        playerProject: initializeWorld(playerProjectData, "playerProject")
    }
  }),

  actions: {
    save() {
        localStorage.setItem('levelStore', JSON.stringify(this.worlds))
    },

    load() {
        const saved = localStorage.getItem('levelStore')
        if (!saved) return

        const parsed = JSON.parse(saved)

        this.worlds = {
            world1: mergeWorldData(world1Data, parsed.world1),
            world2: mergeWorldData(world2Data, parsed.world2),
            playerProject: mergeWorldData(playerProjectData, parsed.playerProject)
        }
    },

    completeLevel(worldKey, levelId) {
    const levels = this.worlds[worldKey]
    const index = levels.findIndex(l => l.id === levelId)
    if (index === -1) return

    levels[index].completed = true

    const next = levels[index + 1]
    if (next) next.unlocked = true

    this.save()
    }
  }
})