<template>
    <footer>
        <div class="official">民主党官方网站</div>
        <div class="wrapper flex wrap space-between">
            <div class="copyright">
                <router-link class="footer-btn" :to="{name: 'press'}">媒体中心</router-link>
                <br>
                <br>版权所有 © 2017 DNC服务协会
                <br>所有权利保留。
                <br>
                <br>
                <strong>民主党全国委员会</strong>主办
                <br>(202)863-8000
                <br>
                <br>本通讯并非由任何参选人或参选人的委员会授权。
                <br>
                <br>
                <strong>民主党全国委员会</strong>
                <br>国会南街东南430号
                <br>华盛顿哥伦比亚特区 20003
            </div>
            <ul class="footer-nav flex wrap">
                <li class="footer-nav-col">
                    <strong>关于</strong>
                    <ul>
                        <li v-for="(item, index) in nav.about" :key="index">
                            <router-link :to="item.link">{{ item.name }}</router-link>
                        </li>
                    </ul>
                    <strong>更多</strong>
                    <ul>
                        <li><a href="#">ASDC</a></li>
                        <li><a href="#">供应者多样性</a></li>
                        <li><a href="#">隐私政策</a></li>
                        <li><a href="#">服务条款</a></li>
                        <li><a href="#">提交条款</a></li>
                    </ul>
                </li>
                <li class="footer-nav-col">
                    <strong>人物</strong>
                    <ul>
                        <li><a href="#">非裔美国人</a></li>
                        <li><a href="#">残障人士</a></li>
                        <li><a href="#">美国犹太人群体</a></li>
                        <li><a href="#">亚裔美国人和太平洋岛民</a></li>
                        <li><a href="#">旅外民主党人</a></li>
                        <li><a href="#">少数民族</a></li>
                        <li><a href="#">宗教群体</a></li>
                        <li><a href="#">西班牙裔</a></li>
                        <li><a href="#">LGBT群体</a></li>
                        <li><a href="#">美国原住民</a></li>
                        <li><a href="#">美国乡村居民</a></li>
                        <li><a href="#">长者和退休人士</a></li>
                        <li><a href="#">小商业群体</a></li>
                        <li><a href="#">工会成员和家庭</a></li>
                        <li><a href="#">退伍军人和家庭</a></li>
                        <li><a href="#">妇女</a></li>
                        <li><a href="#">青年人和学生</a></li>
                    </ul>
                </li>
                <li class="footer-nav-col">
                    <strong>事项</strong>
                    <ul>
                        <li><a href="#">公民权利</a></li>
                        <li><a href="#">教育</a></li>
                        <li><a href="#">能源独立</a></li>
                        <li><a href="#">环境</a></li>
                        <li><a href="#">医疗保障</a></li>
                        <li><a href="#">移民改革</a></li>
                        <li><a href="#">工作和经济</a></li>
                        <li><a href="#">国家安全</a></li>
                        <li><a href="#">开放政府</a></li>
                        <li><a href="#">退休保障</a></li>
                        <li><a href="#">科学与技术</a></li>
                        <li><a href="#">投票权</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="logo">
            <svg height="70" width="70" viewBox="0 0 34.197461 34.197461">
                <path d="m17.145 0.1542c-9.3187 0-16.899 7.5813-16.899 16.899 0 9.3175 7.5801 16.899 16.899 16.899 9.3175 0 16.899-7.5811 16.899-16.899 0-9.3175-7.5811-16.899-16.899-16.899zm0 4.3412c6.9238 0 12.557 5.6339 12.557 12.558 0 6.925-5.6337 12.557-12.557 12.557-6.925 0-12.559-5.6324-12.559-12.557 0-6.9238 5.6338-12.558 12.559-12.558zm-5.5914 5.6539v13.807h5.2475c4.97 0 7.8699-2.9588 7.8699-6.9438v-0.03867c0-3.985-2.86-6.825-7.7912-6.825h-5.3262zm3.8275 3.3926h1.5574c2.2875 0 3.8062 1.2812 3.8062 3.4912v0.04004c0 2.2288-1.5188 3.4912-3.8062 3.4912h-1.5574v-7.0225z" fill="#fff" />
            </svg>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer',
    data() {
        return {
            nav: {
                about: [
                    {
                        name: '本党政纲',
                        link: '/'
                    },
                    {
                        name: '关于我们',
                        link: '/about/our-party'
                    },
                    {
                        name: '本党历史',
                        link: '/'
                    },
                    {
                        name: '本党领袖',
                        link: '/'
                    },
                    {
                        name: '党内组织',
                        link: '/'
                    },
                    {
                        name: '竞选公职',
                        link: '/'
                    },
                    {
                        name: '各州分支',
                        link: '/'
                    },
                    {
                        name: '工作岗位',
                        link: '/'
                    },
                    {
                        name: '实习机会',
                        link: '/'
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>


