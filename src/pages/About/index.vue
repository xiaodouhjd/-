<template>
    <div class="content-center">
        <p>About</p>
        <p>
            <router-link to="/about/feature">Feature</router-link><router-link to="/about/team">Team</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
import metaInfo from '@/common/util/metaInfo'
export default {
    metaInfo:metaInfo.About,
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
div{
    p{
        a{
            padding:15px;
        }
    }
}
</style>