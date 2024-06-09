import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { routes } from 'route-path'
import ServerList from './ServerList'
import ServerTable from './ServerTable'

const Server = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path} component={ServerList} />
      <Route path={routes.gamemodeType} component={ServerTable} />
    </Switch>
  )
}

export default Server
