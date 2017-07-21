<template>
<div>
    <dems-header></dems-header>
    <dems-banner bannerTitle="媒体中心"></dems-banner>
    <section>
        <div class="wrapper">
            <div class="page flex wrap">
                <div class="page-main">
                    <div class="post" v-for="(item, index) in posts" :key="index">
                        <router-link class="page-title" :to="{name: item.link ? item.link : 'index'}">{{ item.title }}</router-link>
                        <div class="page-date">{{ item.date }}</div>
                        <div class="page-content"><p>{{ item.text }}</p></div>
                    </div>
                </div>
                <div class="page-side"></div>
            </div>
        </div>
    </section>
    <dems-signup></dems-signup>
    <dems-footer></dems-footer>
</div>
</template>

<script>
import demsHeader from '../../components/header';
import demsBanner from '../../components/banner';
import demsSignup from '../../components/signup';
import demsFooter from '../../components/footer';

export default {
    name: 'press',
    components: {
        demsHeader,
        demsBanner,
        demsSignup,
        demsFooter
    },
    data: function() {
        return {
            posts: [
                {
                    title: '特朗普和彭斯要为共和党医改的失败负责',
                    date: '2017年7月19日',
                    text: '特朗普总统和彭斯副总统竭尽全力让共和党的废除医改议案在参议院通过。就算特朗普可能不服输或者不愿承担责任来展现领导力，他和彭斯都要为共和党医改的失败负责。'
                },
                {
                    title: '新视频：DNC、威斯康辛民主党，参议院竞选人强调共和党废除医改议案的影响',
                    date: '2017年7月18日',
                    text: '今天，民主党全国委员会、威斯康辛民主党和参议院竞选人Tammy Baldwin发布了一段新视频，视频重点叙述了一个威斯康辛家庭的故事，以及家中的两个女儿Anna和Maren，她们将要面临医改废除带来的负面后果。'
                },
                {
                    title: '特朗普，共和党曾承诺不会只废除不替换',
                    date: '2017年7月18日',
                    text: '多数党领袖McConnell说他现在愿意在没有替换方案的情况下，就医改废除议案进行投票。鉴于此，让我们看看共和党人以往的态度，包括已经表明不会接受这一方案的特朗普总统和彭斯副总统。'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/page';
@import './press.scss';
</style>

