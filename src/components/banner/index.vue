<template>
<div class="banner flex wrap">
    <h1>{{ bannerTitle ? bannerTitle : '' }}</h1>
</div>  
</template>

<script>
export default {
    name: 'banner',
    props: ['bannerTitle']
}
</script>

<style lang="scss" scoped>
@import './banner.scss';
</style>


