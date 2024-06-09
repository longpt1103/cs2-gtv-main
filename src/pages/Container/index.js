import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from 'components/Header'
import Drawer from 'components/Drawer'
import Server from 'pages/Server'
import { Modals } from 'components/modal'
import { Watcher } from 'components/auth'
import { routes } from 'route-path'
import './style.scss'

const Container = () => {
  return (
    <div className="dashboard">
      <Watcher />
      <Modals />
      <Drawer />
      <main>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={Server} />
          <Route path={routes.gamemodeList} component={Server} />
        </Switch>
      </main>
    </div>
  )
}

export default Container
