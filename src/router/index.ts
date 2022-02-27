import * as Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TransitRouteSearch from '@/views/TransitRouteSearch/index.vue';
import TransitRouteResult from '@/views/TransitRouteResult/index.vue';
import BusInfo from '@/views/BusInfo/index.vue';
import TrainInfo from '@/views/TrainInfo/index.vue';
import Fix from '@/views/Fix/index.vue';

const routes = [
  { path: '/', name: 'TransitRouteSearch', component: TransitRouteSearch },
  {
    path: '/result',
    name: 'TransitRouteResult',
    component: TransitRouteResult,
  },
  { path: '/businfo', name: 'BusInfo', component: BusInfo },
  { path: '/traininfo', name: 'TrainInfo', component: TrainInfo },
  { path: '/fix', name: 'Fix', component: Fix },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
