<template> 
  <div v-if="open" class="popup">
    <div class="popupInner">
      <h1 class="popup-title">{{ title }}</h1>

        <div class="popupMessage" v-html="message"></div>

      <img v-if="image" :src="image" alt="Popup Image" />

      <div class="popupButtons">
        <button
          v-if="secondaryButtonText"
          type="button"
          class="custom-button secondaryButton"
          @click="closePopup"
        >
          {{ secondaryButtonText }}
        </button>

        <button
          type="button"
          class="custom-button"
          @click="handleMainButton"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'
import star from '../assets/images/star.gif'

const myConfetti = confetti.create(null, {
  resize: true,
  useWorker: true
})

export default {
  name: "Popup",
  emits: ['close', 'confirm'],
  props: {
    open: { type: Boolean, default: false },
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    buttonText: { type: String, default: 'Continue' },
    secondaryButtonText: { type: String, default: '' },
    image: { type: String, default: '' },
    showConfetti: { type: Boolean, default: false },
    isConfirmPopup: { type: Boolean, default: false }
  },
 watch: {
    open(newVal) {
      if (newVal && this.showConfetti) {
        myConfetti({
          particleCount: 60,
          spread: 60,
          startVelocity: 25,
          ticks: 70,
          zIndex: 99999,
        })
      }
    }
},
  methods: {
    closePopup() {
      this.$emit('close')
    },
    handleMainButton() {
      if (this.isConfirmPopup) {
        this.$emit('confirm')
      } else {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #0007;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  padding: 4vw;
  overflow-y: auto;
}

.popupInner {
  width: min(92%, 1400px);
  background: #282c34;
  border: 3px solid #2CDA9D;
  border-radius: 20px;
  padding: 35px;
  text-align: center;
  color: #abb2bf;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.45);

  h1 {
    font-family: 'DeepShadow', sans-serif;
    text-align: center;
    color: #ececef;

    font-size: 1.2rem;
    letter-spacing: 4px;
    line-height: 2;
    margin-bottom: 20px;
    word-break: break-word;
  }

  h2 {
    color: #2CDA9D;
    margin-bottom: 10px;
    font-size: 1.25rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    padding-left: 22px;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }

  img {
    display: block;
    width: 160px;
    max-width: 100%;
    margin: 25px auto 10px auto;
  }
}

.intro {
  text-align: center;
  font-size: 1.05rem;
  margin-bottom: 25px;
}

.info-section {
  background: #21252b;
  border: 2px solid #2CDA9D;
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 18px;
}

.popupButtons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.secondaryButton {
  background: #4b3b40;
  color: #ececef;

  &:hover {
    background: #6b4c57;
    color: #ececef;
  }
}

@media (max-width: 767px) {
  .popup {
    padding: 16px;
    align-items: flex-start;
  }

  .popupInner {
    width: 100%;
    max-width: 100%;
    padding: 24px 18px;
    margin-top: 10px;

    h1 {
      font-family: 'DeepShadow', sans-serif;

      font-size: 1.1rem;
      letter-spacing: 3px;
      line-height: 2.2;

      margin-bottom: 20px;
      word-break: break-word;
      text-align: center;
    }

    h2 {
      font-size: 1.1rem;
    }

    img {
      width: 120px;
      margin: 20px auto 10px auto;
    }
  }

  .popupButtons {
    flex-direction: column;
    align-items: center;
  }
}

  .intro {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .info-section {
    padding: 16px;
    margin-bottom: 16px;
  }

.popupButtons {
  flex-direction: column;
  align-items: center;
}



@media (min-width: 768px) and (max-width: 1023px) {
  .popup {
    padding: 3vw;
  }

  .popupInner {
    width: 88%;
    max-width: 850px;
    padding: 30px;

    h1 {
      font-size: 2.1rem;
    }

    img {
      width: 140px;
    }
  }
}

/* desktop */
@media (min-width: 1024px) {
  .popup {
    padding: 2.5vh 3vw;
  }

  .popupInner {
    width: 82%;
    max-width: 1200px;
    min-height: auto;
    padding: 2.2vw 2.5vw;
  }

  .intro {
    margin-bottom: 18px;
  }

  .info-section {
    padding: 1.1vw 1.3vw;
    margin-bottom: 14px;
  }

  .popupInner h1 {
    font-size: clamp(2rem, 2.4vw, 3rem);
    margin-bottom: 14px;
  }

  .popupInner h2 {
    font-size: clamp(1.1rem, 1.25vw, 1.5rem);
    margin-bottom: 8px;
  }

  .popupInner p,
  .popupInner li {
    font-size: clamp(0.95rem, 0.95vw, 1.1rem);
    line-height: 1.45;
  }

  .popupInner ul {
    padding-left: 1.5rem;
  }

  .popupInner img {
    width: min(8vw, 110px);
    margin: 14px auto 8px auto;
  }
}

/* wider desktop */
@media (min-width: 1400px) {
  .popupInner {
    width: 75%;
    max-width: 1300px;
  }
}


</style>