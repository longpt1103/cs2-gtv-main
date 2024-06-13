import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'reactstrap'
import {
  selectTotalPlayers,
  selectIsPendingFetchAll,
  selectPlayerOnline,
  selectMapCount,
  selectServerOnline,
} from 'components/steam/selectors'
import { ReactComponent as ServerIcon } from 'assets/icons/server.svg'
import { ReactComponent as PlayerIcon } from 'assets/icons/player.svg'
import { ReactComponent as MapIcon } from 'assets/icons/map.svg'
import { ReactComponent as TotalPlayerIcon } from 'assets/icons/total-player.svg'

const items = [
  {
    id: 'item_1',
    type: 'red',
    name: 'server',
    number: 235,
    text: 'server online',
    icon: ServerIcon,
  },
  {
    id: 'item_2',
    type: 'green',
    name: 'online',
    number: 1423,
    text: 'player online',
    icon: PlayerIcon,
  },
  {
    id: 'item_3',
    type: 'blue',
    name: 'map',
    number: 12,
    text: 'maps',
    icon: MapIcon,
  },
  {
    id: 'item_4',
    type: 'yellow',
    name: 'player',
    number: 8239,
    text: 'total players',
    icon: TotalPlayerIcon,
  },
]

const Item = memo(
  ({ number, text, name, type, icon: Icon, loading = false }) => {
    return (
      <div className={`info-item info-item--${name}`}>
        <div className="top">
          <Icon />
          <span
            className={`d-flex align-items-center justify-content-center text-number text-color-game-${type} text-large`}
          >
            {loading ? <Spinner size="sm" /> : number}
          </span>
        </div>
        <div className="bottom text-small">{text}</div>
      </div>
    )
  },
)

const RoomInfo = () => {
  const loading = useSelector(selectIsPendingFetchAll)
  const totalPlayers = useSelector(selectTotalPlayers)
  const playerOnline = useSelector(selectPlayerOnline)
  const mapCount = useSelector(selectMapCount)
  const serverOnline = useSelector(selectServerOnline)
  return (
    <div className="room-card room-info">
      <div className="info-wrapper">
        <div className="info">
          {items.map(({ id, name, number: numberRoot, ...rest }) => {
            let number = numberRoot
            if (name === 'player') number = totalPlayers
            if (name === 'online') number = playerOnline
            if (name === 'map') number = mapCount
            if (name === 'server') number = serverOnline
            return (
              <Item
                key={id}
                loading={loading}
                name={name}
                number={number}
                {...rest}
              />
            )
          })}
        </div>
        <p className="server-info-text text-normal">
          Bên cạnh GPlay Premier, hệ thống giải đấu đầu tiên với cơ chế thăng
          hạng xuống hạng dành riêng cho cộng đồng CS2 Việt Nam, GPlay - GTV
          tiếp tục phát triển community server cho tựa game Counter-Strike 2.
          Đây là sân chơi chất lượng, nơi mà sự công bằng và tính minh bạch được
          đặt lên hàng đầu, cùng với mục tiêu chung là phát triển cộng đồng.
        </p>
      </div>
    </div>
  )
}

export default memo(RoomInfo)
