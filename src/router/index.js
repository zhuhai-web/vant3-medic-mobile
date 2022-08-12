import {createRouter, createWebHashHistory} from 'vue-router';

const SplashPage = () => import('../view/splash/SplashPage');
const MainPage = () => import('../view/main/MainPage');
const TabHome = () => import('../view/main/TabHome');
const TabDoctor = () => import('../view/main/TabDoctor');
const TabMessage = () => import('../view/main/TabMessage');
const TabMine = () => import('../view/main/TabMine');
const FactoryMain = () => import('../view/factory/FactoryMain');
const GuidePage = () => import('../view/splash/GuidePage');

const routes = [
  {path: '/:pathMatch(.*)*', redirect: 'SplashPage'},
  {name: 'SplashPage', component: SplashPage},
  {
    name: 'main', redirect: '/main/home', component: MainPage,
    children: [
      {name: 'home', path: 'home', component: TabHome, meta: {keepAlive: true, title: '首页'}},
      {name: 'doctor', path: 'doctor', component: TabDoctor, meta: {keepAlive: true, title: '问医生'}},
      {name: 'message', path: 'message', component: TabMessage, meta: {keepAlive: true, title: '消息'}},
      {name: 'mine', path: 'mine', component: TabMine, meta: {keepAlive: true, title: '我的'}},
    ], meta: {keepAlive: true}
  },
  {name: 'GuidePage', component: GuidePage},
  {name: 'FactoryMain', component: FactoryMain},
];

// 懒得写path，给他们自动生成一个，和name同名
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 生命周期之前
router.beforeEach((to, from, next) => {
  // 保存个路由来路，以备不时之需
  localStorage.setItem('fromPage', from.name);
  next();
});

//生命周期之后
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '就医挂号(让健康更简单)';
  }
  // 滑动到顶吧
  window.scrollTo(0, 0);
});

export {router};
