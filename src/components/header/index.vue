<template>
    <header>
        <div class="wrapper">
            <div class="nav flex wrap middle space-between">
                <router-link :to="{name: 'index'}" class="logo flex wrap middle">
                    <svg class="logo-img" viewBox="0 0 34.197461 34.197461">
                        <path d="m17.145 0.1542c-9.3187 0-16.899 7.5813-16.899 16.899 0 9.3175 7.5801 16.899 16.899 16.899 9.3175 0 16.899-7.5811 16.899-16.899 0-9.3175-7.5811-16.899-16.899-16.899zm0 4.3412c6.9238 0 12.557 5.6339 12.557 12.558 0 6.925-5.6337 12.557-12.557 12.557-6.925 0-12.559-5.6324-12.559-12.557 0-6.9238 5.6338-12.558 12.559-12.558zm-5.5914 5.6539v13.807h5.2475c4.97 0 7.8699-2.9588 7.8699-6.9438v-0.03867c0-3.985-2.86-6.825-7.7912-6.825h-5.3262zm3.8275 3.3926h1.5574c2.2875 0 3.8062 1.2812 3.8062 3.4912v0.04004c0 2.2288-1.5188 3.4912-3.8062 3.4912h-1.5574v-7.0225z" />
                    </svg>
                    <span class="logo-txt desktop-content">民主党</span>
                </router-link>
                <div class="nav-buttons-wrapper">
                    <div class="nav-buttons flex wrap middle">
                        <div class="desktop-content social-wrapper">
                            <div class="social" v-bind:class="{active: socialShown}">
                                <a href="#"><i class="social-icon fa fa-facebook"></i></a>
                                <a href="#"><i class="social-icon fa fa-twitter"></i></a>
                                <a href="#"><i class="social-icon fa fa-youtube"></i></a>
                                <a href="#"><i class="social-icon fa fa-medium"></i></a>
                                <a href="#"><i class="social-icon fa fa-instagram"></i></a>
                                <a href="#"><i class="social-icon fa fa-snapchat-ghost"></i></a>
                            </div>
                        </div>
                        <div v-bind:class="{active: socialShown}" class="social-toggle" v-on:click="toggleSocial">+</div>
                        <div class="btn-wrapper">
                            <a class="donate-btn" href="#">捐助<span class="desktop-content">我们</span></a>
                        </div>
                    </div>
                </div>
                <div class="mobile-content mobile-nav" v-bind:class="{active: socialShown}">
                    <div>
                        <a href="#"><i class="social-icon fa fa-facebook"></i></a>
                        <a href="#"><i class="social-icon fa fa-twitter"></i></a>
                        <a href="#"><i class="social-icon fa fa-youtube"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="social-icon fa fa-medium"></i></a>
                        <a href="#"><i class="social-icon fa fa-instagram"></i></a>
                        <a href="#"><i class="social-icon fa fa-snapchat-ghost"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header',
    data: function() {
        return {
            socialShown: false
        }
    },
    methods: {
        toggleSocial: function () {
            this.socialShown = this.socialShown === false ? true : false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>