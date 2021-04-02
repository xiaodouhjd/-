<template>
  <div>
    <Header></Header>
    <!-- getCrumbs.length为0时，不显示面包屑导航 -->
    <Crumbs v-show="getHasCrumbs && getCrumbs.length" />
    <!-- 有面包屑导航的时候添加class content-has-crumbs是为了控制有无面包屑导航时的页面最小高度 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Crumbs from "../../components/Crumbs";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Crumbs,
  },
  directives: {},
  data() {
    return {};
  },
  computed: {
    getHasCrumbs() {
      return this.$store.state.Breadcrumb.hasCrumbs;
    },
    getCrumbs() {
      return this.$store.state.Breadcrumb.crumbsList;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="lass" scoped>
/* .content {
  min-height: call(100vh-72px-60px);
}
.content-has-crumbs {
  min-height: call(100vh-72px-60px-30px);
} */
</style>