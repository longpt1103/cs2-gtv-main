import RoomInfo from 'components/RoomInfo'
import RoomCard from 'components/RoomCard'
import { filterHideRoomCard as roomCard } from 'data'

const ServerList = () => {
  return (
    <div className="room-card-view-container">
      <RoomInfo />
      {roomCard.map((room) => (
        <RoomCard key={room.id} {...room} isHoverVideo={true} />
      ))}
    </div>
  )
}

export default ServerList
