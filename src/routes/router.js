import Vue from 'vue'
import Router from 'vue-router'

import * as VueGoogleMaps from 'vue2-google-maps'

import FamilyInfo from './FamilyInfo.vue'
import FamilyTreatment from './FamilyTreatment.vue'
import UserInfo from './UserInfo.vue'
import UserTreatment from './UserTreatment.vue'

Vue.use(Router)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.API_KEY,
    libraries: 'places',
  },
})

export default new Router({
  routes: [
    {
      path: `/family/info`,
      name: `familyInfo`,
      component: FamilyInfo
    },
    {
      path: `/family/treatment`,
      name: `familyTreatment`,
      component: FamilyTreatment
    },
    {
      path: `/user/info`,
      name: `userInfo`,
      component: UserInfo,
    },
    {
      path: `/user/treatment`,
      name: `userTreatment`,
      component: UserTreatment,
    }
  ],
  mode: 'history'
})
