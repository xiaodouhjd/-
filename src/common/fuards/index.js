import router from '@/router'
import store from '@/store/index'
router.beforeEach((to, from, next) => {
    // ...
    next()
  })
router.afterEach(to => {
    console.log(to.matched)
    var list =Array.from(to.matched);
    list.shift()
    console.log(list)
    store.dispatch('Breadcrumb/setCrumbs', list)  //状态文件actions里面定义的方法
})