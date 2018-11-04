import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Splash from '../../splash/splash'
import Home from '../../home/home'
import Details from '../../details/detail'
import Login from '../../login/login'


const Routes = () => (
    <Router navigationBarStyle={{ backgroundColor: '#333'}}>
        <Scene key="root">
            {/* <Scene key="splash" component={Splash}  initial={false} hideNavBar={true} /> */}
        {/* <Scene key="splash" component={Login}  initial={false} hideNavBar={true} /> */}
            <Scene titleStyle={{color:'#fff'}} key="home" component={Home} title="home" />
            <Scene titleStyle={{color:'#fff'}} key="details" component={Details} title="work-out details" />
        </Scene>
    </Router>
)
export default Routes