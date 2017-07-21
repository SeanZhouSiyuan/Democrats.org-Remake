<template>
<div class="signup">
    <form action="" id="signup-form"></form>
    <div class="wrapper flex wrap middle space-between">
        <div class="signup-title">表明你支持民主党人：</div>
        <div><input type="text" name="name" class="name" form="signup-form" placeholder="姓名" required></div>
        <div><input type="email" name="email" class="email" form="signup-form" placeholder="电子邮件" required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,11}"></div>
        <div><input type="text" name="zip" class="zip" form="signup-form" placeholder="邮政编码" required pattern="\d{5}-?(\d{4})?"></div>
        <div><input type="submit" class="submit" form="signup-form" value="签上我的名字"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'signup'
}
</script>

<style lang="scss" scoped>
@import './signup.scss';
</style>
