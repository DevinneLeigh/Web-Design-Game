<template>
        <div v-if="open" class="popup" @click.self="closePopup">
            <div class="popupInner">
                <h2>{{ title }}</h2>
                <p>{{ message }}</p>
                <img :src="star" alt="Rotating star" />
                <br>
                <button type="button" 
                class="popupButton"
                @click="closePopup">Close</button>
            </div>
        </div>
</template>
<script>
import star from '../assets/styles/star.gif'
export default {
        name: "Popup",
        emits: ['close'],
        props: {
                open: { type: Boolean, default: false },
                title: { type: String, default: '' },
                message: { type: String, default: '' }
        },
        data() {
                return { star }
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
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;

        .popupInner {
            background: rgb(39, 39, 62);
            padding: 20px;
            border-radius: 8px;
            text-align: center;

            img {
                width: 350px;
            }
        }

        .popupButton {
            margin-top: 20px;
            padding: 10px 20px;
            background: #ff7b7b;
            color: white;
            border: none;
            border-radius: 9px;
            cursor: pointer;

            &:hover {
                background: #e96666;
            }
        }
    }
</style>