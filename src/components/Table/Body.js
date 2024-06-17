import { memo, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import modal from 'components/modal/provider'
import { selectIsSignIn, selectSteamId } from 'components/auth/selectors'
import { makeGetServerList, selectPage } from 'components/steam/selectors'
import { fetchSteamConfig } from 'components/auth/slices/asyncThunk'
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg'
import { ReactComponent as PlayDarkIcon } from 'assets/icons/play-dark.svg'
import { FETCH_SERVER_LIMIT } from 'utils/constants'
import EmptyRow from './EmptyRow'

const defaultItem = {}

const ButtonConnect = ({ addr = '' }) => {
  const dispatch = useDispatch()
  const isSignIn = useSelector(selectIsSignIn)
  const steamId = useSelector(selectSteamId)
  const hasConnect = !!(isSignIn && steamId)
  const onClickConnect = () => {
    if (!isSignIn) {
      modal.common.loginRequired()
      return
    }
    // signined
    if (steamId) {
      const connect = `steam://connect/${addr}`
      window.location.href = connect
    } else {
      // connect steam first
      dispatch(fetchSteamConfig())
    }
  }
  return (
    <button
      className={`btn btn-wide ${
        hasConnect ? 'btn-game-blue' : 'btn-outline-default'
      }`}
      onClick={onClickConnect}
    >
      {hasConnect ? <PlayIcon /> : <PlayDarkIcon />}
    </button>
  )
}

const Item = memo(({ item = defaultItem, count }) => {
  const {
    name = '',
    addr = '',
    players = 0,
    max_players = 0,
    map = '',
    gameport = 0,
  } = item
  const ping = 'Vietnam'
  const [ip, port] = addr.split(':')
  return (
    <>
      <EmptyRow />
      <tr>
        <td>{`#${count}`}</td>
        <td>{name}</td>
        <td>{ip}</td>
        <td>{gameport || port}</td>
        <td
          className={`text-game-${ping === 20 ? 'green' : 'yellow'}`}
        >{`${ping}`}</td>
        <td>{`${players}/${max_players}`}</td>
        <td>{map}</td>
        <td>
          <ButtonConnect addr={addr} />
        </td>
      </tr>
    </>
  )
})

const Body = () => {
  const getServerList = useMemo(makeGetServerList, [])
  const page = useSelector(selectPage)
  const servers = useSelector((state) => getServerList(state, page))
  return (
    <tbody>
      {servers.map((item, index) => {
        const key = `${item.steamid}-${item.addr}`
        const limit = FETCH_SERVER_LIMIT
        const count = limit * page - (limit - index - 1)
        return <Item key={key} item={item} count={count} />
      })}
    </tbody>
  )
}

export default Body
