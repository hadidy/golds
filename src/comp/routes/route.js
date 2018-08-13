import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Splash from '../../splash/splash'
import Home from '../../home/home'
import Details from '../../details/detail'


const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="splash" component={Splash}  initial={false} hideNavBar={true} />
            <Scene key="home" component={Home} title="home" />
            <Scene key="details" component={Details} title="work-out details" />
        </Scene>
    </Router>
)
export default Routes