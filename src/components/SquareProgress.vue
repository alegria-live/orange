<template>
     <loading-progress
            :progress="progress"
            :indeterminate="indeterminate"
            :counter-clockwise="counterClockwise"
            :hide-background="hideBackground"
            :fill-duration="fillDuration"
            shape="square" size="74" />
</template>

<script>
export default {
    name: "SquareProgress",
    data() {
        return {
            progress:0,
            indeterminate:true,
            counterClockwise:false,
            hideBackground:false
        }
    },
    computed: {
        fillDuration() {
            return Math.floor(Math.random() * 6) + 2
        }
    }
}
</script>

<style>

    .vue-progress-path {
        stroke-width: 4;
        fill:none;
    }
    .vue-progress-path .progress {
        stroke: rgb(232, 123, 40);
    }
    .vue-progress-path .background {
        stroke: #ddd;
    }
    
</style>

