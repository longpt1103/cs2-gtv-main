import { memo, useMemo } from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  selectIsPendingFetchAll,
  makeGetPlaying,
} from 'components/steam/selectors'
import { pushToGameModePath } from 'utils/route'

const renderStatusText = (type = 'default') => {
  if (type === 'default') return ''
  return type.split('-').join(' ')
}

const Playing = ({ modePath }) => {
  const getPlaying = useMemo(makeGetPlaying, [])
  const isLoading = useSelector(selectIsPendingFetchAll)
  const playing = useSelector((state) => getPlaying(state, modePath))
  if (isLoading || !modePath) {
    return <div className="label label--player" />
  }
  return <div className="label label--player">{`${playing} playing`}</div>
}

const RoomCard = ({
  type = 'default',
  src = '',
  mode = '',
  modePath = '',
  onClick,
}) => {
  const onClickCard = () => {
    pushToGameModePath(modePath)
    onClick?.()
  }
  return (
    <div
      className={clsx('room-card saira-extra-condensed has-overlay', {
        [`room-card room-card--${type}`]: type !== 'default',
      })}
      onClick={onClickCard}
    >
      {type !== 'default' ? (
        <span className="status">{renderStatusText(type).toUpperCase()}</span>
      ) : null}
      <img alt="room" src={src} className="room-img" />
      <div className="mt-auto">
        <div className="label label--mode">{mode}</div>
        <Playing modePath={modePath} />
      </div>
    </div>
  )
}

export default memo(RoomCard)
