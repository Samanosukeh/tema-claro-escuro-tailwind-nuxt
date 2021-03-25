<template>
    <button class="btn border border-red rounded bg-red dark:bg-blue px-3 py-3 capitalize" @click="changeMode">
        {{ btnLabel }}
    </button>
</template>

<script>
    export default {
        computed: {
            btnLabel() {
                return this.$colorMode.preference === 'light' ? 'dark' : 'light'
            }
        },
        methods: {
            changeMode() {
                this.$colorMode.preference = 
                    this.$colorMode.preference === 'light' ? 'dark' : 'light'
            }
        }
    }
</script>