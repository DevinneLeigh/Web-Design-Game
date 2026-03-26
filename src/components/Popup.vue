<template>
        <div v-if="open" class="popup" @click.self="closePopup">
            <div class="popupInner">
                <h2>{{ title }}</h2>
                <p>{{ message }}</p>
                <button type="button" 
                class="popupButton"
                @click="closePopup">Close</button>
            </div>
        </div>
</template>
<script>
export default {
        name: "Popup",
        emits: ['close'],
        props: {
                open: { type: Boolean, default: false },
                title: { type: String, default: 'Level Complete!' },
                message: { type: String, default: 'Great work. Your level objectives are complete.' }
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
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }

        .popupButton {
            margin-top: 20px;
            padding: 10px 20px;
            background: #ffb9b9;
            color: white;
            border: none;
            border-radius: 9px;
            cursor: pointer;

            &:hover {
                background: #ff7b7b;
            }
        }
    }
</style>