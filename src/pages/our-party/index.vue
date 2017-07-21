<template>
<div>
    <dems-header></dems-header>
    <dems-banner bannerTitle="关于我们"></dems-banner>
    <section>
        <div class="wrapper">
            <div class="page flex wrap">
                <div class="page-main no-side">
                    <div class="page-content">
                        <p>民主党是合众国现存历史最悠久的政党。自从1848年起，民主党全国委员会就一直是民主党的家。</p>
                        <p>今日，拥有数百万支持者的我们，正为了进步和帮助全国各地的民主党人竞选州政府、国会和白宫而战斗。</p>
                        <p>我们党的团结由以下信条维系：民主党人相信，团结令我们强大，而非各自行事——当所有国民都得到公正对待，所有人依照相同的规矩办事时，这个国家就会成功。在奥巴马总统的带领下，我们党正致力打造能让所有美国人（而非仅仅是权贵）受益的经济。</p>
                        <p>这就是为什么民主党人正努力让创造就业、公平支出、教育、医疗保障和清洁能源等议题取得进展。</p>
                        <p>如果你有兴趣竞选公职来代表你的社区，<a href="#">点击此处</a>.</p>
                    </div>
                    <div class="party-assets flex wrap">
                        <a href="#">全国委员会</a>
                        <a href="#">党组织</a>
                        <a href="#">50-州策略</a>
                        <a href="#">投票权学院</a>
                    </div>
                </div>
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
    name: 'ourParty',
    components: {
        demsHeader,
        demsBanner,
        demsSignup,
        demsFooter
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/page';
@import './ourparty.scss';
</style>
