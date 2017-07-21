<template>
    <div>
        <dems-header></dems-header>
        <div id="content">
            <div class="lead-banner">
                <div class="banner-overlay">
                    <div class="banner-text">
                        <h1 class="banner-title">直播民主党</h1>
                        <a class="banner-btn" href="#">立即观看</a>
                    </div>
                </div>
            </div>
            <dems-signup></dems-signup>
            <div class="action-panel">
                <div class="wrapper flex wrap space-between">
                    <div class="action">
                        <div class="action-overlay">
                            <h2>让特朗普担责</h2>
                            <h3>表明立场</h3>
                            <div class="action-bg"></div>
                        </div>
                    </div>
                    <div class="action">
                        <div class="action-overlay">
                            <h2>拨打电话</h2>
                            <h3>告诉国会共和党人你的立场</h3>
                            <div class="action-bg"></div>
                        </div>
                    </div>
                    <div class="action action-donate" id="action-donate">
                        <div class="action-overlay">
                            <h2>为前方的战斗出份力</h2>
                            <div class="donate-grid flex wrap space-between">
                                <div class="donate-option-wrapper">
                                    <div class="donate-option">$10</div>
                                </div>
                                <div class="donate-option-wrapper">
                                    <div class="donate-option">$25</div>
                                </div>
                                <div class="donate-option-wrapper">
                                    <div class="donate-option">$50</div>
                                </div>
                                <div class="donate-option-wrapper">
                                    <div class="donate-option">$100</div>
                                </div>
                                <div class="donate-option-wrapper">
                                    <div class="donate-option">$250</div>
                                </div>
                                <div class="donate-option-wrapper">
                                    <div class="donate-option">其他</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action">
                        <div class="action-overlay">
                            <h2>观看</h2>
                            <h3>民主党直播</h3>
                            <div class="action-bg"></div>
                        </div>
                    </div>
                    <div class="action">
                        <div class="action-overlay">
                            <h2>商店</h2>
                            <h3>民主党官方商城</h3>
                            <div class="action-bg"></div>
                        </div>
                    </div>
                    <div class="action">
                        <div class="action-overlay">
                            <h2>了解</h2>
                            <h3>我们的新任长官</h3>
                            <div class="action-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <dems-footer></dems-footer>
    </div>
</template>

<script>
import demsHeader from '../../components/header';
import demsSignup from '../../components/signup';
import demsFooter from '../../components/footer';

export default {
    name: 'index',
    components: {
        demsHeader,
        demsSignup,
        demsFooter
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
