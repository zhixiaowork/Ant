// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              name: 'dashboard',
              icon: 'dashboard',
              component: './Home/IndexPage',
            },
            {
              path: '/userManage',
              name: 'user.manage',
              icon: 'crown',
              component: './userManage/Indexpage',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './userManage/Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              path: '/adminManage',
              name: 'admin.manage',
              icon: 'crown',
              component: './adminManage/Indexpage',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './adminManage/Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              path: '/roleManage',
              name: 'role.manage',
              icon: 'crown',
              component: './roleManage/Indexpage',
              authority: ['admin'],
              routes: [
                {
                  path: '/role/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './roleManage/Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              path: '/picturesManage',
              name: 'pictures.manage',
              icon: 'crown',
              component: './picturesManage/Indexpage',
              authority: ['admin'],
              routes: [
                {
                  path: '/picture/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './picturesManage/Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              path: '/logsManage',
              name: 'logs.manage',
              icon: 'crown',
              component: './logsManage/Indexpage',
              authority: ['admin'],
              routes: [
                {
                  path: '/log/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './logsManage/Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              name: 'wechat.config',
              icon: 'table',
              path: '/wechatConfig',
              component: './wechatConfigPage',
            },
            {
              name: 'list.table-list',
              icon: 'table',
              path: '/list',
              hideInMenu: true,
              component: './ListTableList',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
