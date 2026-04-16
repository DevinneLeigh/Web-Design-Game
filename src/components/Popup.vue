<template> 
  <div v-if="open" class="popup">
    <div class="popupInner">
      <h1>{{ title }}</h1>

        <div class="popupMessage" v-html="message"></div>

      <!-- <div class="info-section">
        <h2>What this game is</h2>
        <p>
          This game is a way to practice web design by fixing and improving different webpages. 
          Each level gives you a layout that isn’t quite right, and your goal is to make it look 
          better and function correctly using HTML and CSS. You will be provided with the instructions 
          to learn how to do just that!
        </p>
      </div>

      <div class="info-section">
        <h2>How the game works</h2>
        <ul>
          <li>Each level gives you a webpage with design problems</li>
          <li>You edit the code to fix layout and styling issues</li>
          <li>You can preview your changes live as you work</li>
          <li>Fix all required issues to complete the level</li>
          <li>Levels get harder as you continue through the game</li>
        </ul>
      </div>

      <div class="info-section">
        <h2>What you will learn</h2>
        <p>
          You will learn how to structure pages with HTML, style them using CSS, and fix common 
          layout issues. This helps build real web development skills and improves your ability 
          to design clean, user-friendly websites.
        </p>
      </div> -->

      <img v-if="image" :src="image" alt="Popup Image" />
      <!-- <img :src="star" alt="Rotating star" /> -->

      <button type="button" class="popupButton" @click="closePopup">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'
import star from '../assets/styles/star.gif'

export default {
  name: "Popup",
  emits: ['close'],
  props: {
        open: { type: Boolean, default: false },
        title: { type: String, default: '' },
        message: { type: String, default: '' },
        buttonText: { type: String, default: 'Continue' },
        image: { type: String, default: '' },
        showConfetti: { type: Boolean, default: true }
},
  data() {
    return { star }
  },
 watch: {
        open(newVal) {
                if (newVal && this.showConfetti) {
                        confetti()
                }
        }
},
  methods: {
    closePopup() {
      this.$emit('close')
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
  background: #21252b;
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
  border: 3px solid #56b6c2;
  border-radius: 20px;
  padding: 35px;
  text-align: center;
  color: #abb2bf;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.45);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #ececef;
    font-size: 2.2rem;
  }

  h2 {
    color: #56b6c2;
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
  border: 2px solid #56b6c2;
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 18px;
}

.popupButton {
  display: block;
  margin: 20px auto 0 auto;
  padding: 12px 28px;
  background: #e06c75;
  color: #21252b;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.2s ease;

  &:hover {
    background: #c678dd;
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
      font-size: 1.9rem;
      line-height: 1.2;
    }

    h2 {
      font-size: 1.2rem;
    }

    img {
      width: 120px;
      margin: 20px auto 10px auto;
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

  .popupButton {
    width: 100%;
    max-width: 220px;
  }
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

  .popupButton {
    margin-top: 12px;
    padding: 0.9rem 2rem;
    font-size: 1rem;
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