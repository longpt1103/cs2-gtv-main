import { memo } from 'react'
import { useSelector } from 'react-redux'
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
          <span className={`text-number text-color-game-${type} text-large`}>
            {loading ? '' : number}
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
      <div className="mt-auto mb-auto mb-sm-0">
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
          Giám sát máy chủ CS2/CSGO May chủ 5v5 - tại đây bạn tìm thấy các máy
          chủ trực tuyến Counter-Strike 2/GO tốt nhất với xếp hạng tốt và phù
          hợp với mọi sở thích. Chọn máy chủ CS2/CSGO mà bạn quan tâm từ danh
          sách, sao chép địa chỉ máy chủ và tham gia. Chúng tôi chúc bạn một trò
          chơi tốt! Sử dụng tính năng tìm kiếm thuận tiện cho các máy chủ
          CS2/CSGO May chủ 5v5 để tìm máy chủ mà bạn quan tâm theo bất kỳ tiêu
          chí nào của bạn. Giám sát của chúng tôi bao gồm hàng nghìn máy chủ
          Counter-Strike 2/GO trên toàn thế giới và kiểm tra các máy chủ trực
          tuyến mỗi phút và suốt ngày đêm. Trang này hiển thị các máy chủ
          CS2/CSGO tốt nhất với tất cả dữ liệu cần thiết: mô tả máy chủ, quốc
          gia, số lượng người chơi, máy chủ IP, hoạt động của người chơi trong
          ngày qua, v.v.
        </p>
      </div>
    </div>
  )
}

export default memo(RoomInfo)
