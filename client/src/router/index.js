import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'
import StateDetail from '@/components/StateDetail'
/*Application entry point. components are registered and router is associated to components*/undefined

export default new Router({
    routes: [
        {
        path: '/', //default url path
        component:StateList // default component to load in browser
    },
    {
        path: '/about', // about component to load as about page
        component: About
    },
    {
        path: '/detail/:state',
        name: 'detail',
        component: StateDetail
    },
    
    ],
    mode: 'history' // added to get rid of the # tag included with the URL on the browser
   
})