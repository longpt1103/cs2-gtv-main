import { memo, useMemo, useState, useImperativeHandle, useRef } from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  selectIsPendingFetchAll,
  makeGetPlaying,
} from 'components/steam/selectors'
import { pushToGameModePath } from 'utils/route'
import {
  COMING_SOON_FILTER_GAMEMODE,
  HIDE_FILTER_GAMEMODE,
} from 'utils/constants'

const renderStatusText = (type = 'default') => {
  if (type === 'default') return ''
  return type.split('-').join(' ')
}

const Playing = ({ modePath, disabled = false }) => {
  const getPlaying = useMemo(makeGetPlaying, [])
  const isLoading = useSelector(selectIsPendingFetchAll)
  const playing = useSelector((state) => getPlaying(state, modePath))
  if (isLoading || !modePath || disabled) {
    return <div className="label label--player" />
  }
  return <div className="label label--player">{`${playing} playing`}</div>
}

const Video = ({ srcVideo = null, videoCompRef }) => {
  const ref = useRef(null)
  useImperativeHandle(
    videoCompRef,
    () => {
      return {
        play() {
          const video = ref.current
          if (video) video.play()
        },
        stop() {
          const video = ref.current
          if (video) {
            video.pause()
            video.currentTime = 0
          }
        },
      }
    },
    [],
  )
  return (
    <video
      ref={ref}
      className="media-block video"
      src={srcVideo}
      loop
      muted
    ></video>
  )
}

const RoomCard = ({
  type = 'default',
  src = '',
  mode = '',
  modePath = '',
  onClick,
  isHoverVideo = false,
  srcVideo,
}) => {
  const disabled =
    COMING_SOON_FILTER_GAMEMODE.includes(modePath) ||
    HIDE_FILTER_GAMEMODE.includes(modePath)
  const videoCompRef = useRef(null)
  const onClickCard = () => {
    if (disabled) return
    pushToGameModePath(modePath)
    onClick?.()
  }
  const onMouseEnter = () => {
    if (
      isHoverVideo &&
      videoCompRef.current &&
      typeof videoCompRef.current.play === 'function'
    ) {
      videoCompRef.current.play()
    }
  }
  const onMouseLeave = () => {
    if (
      isHoverVideo &&
      videoCompRef.current &&
      typeof videoCompRef.current.stop === 'function'
    ) {
      videoCompRef.current.stop()
    }
  }
  return (
    <div
      className={clsx('room-card saira-extra-condensed has-overlay', {
        [`room-card room-card--${type}`]: type !== 'default',
      })}
      onClick={onClickCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {type !== 'default' ? (
        <span className="status">{renderStatusText(type).toUpperCase()}</span>
      ) : null}
      <>
        <img alt="room" src={src} className="room-img media-block" />
        {isHoverVideo && srcVideo ? (
          <Video srcVideo={srcVideo} videoCompRef={videoCompRef} />
        ) : null}
      </>
      <div className="mt-auto">
        <div className="label label--mode">{mode}</div>
        <Playing modePath={modePath} disabled={disabled} />
      </div>
    </div>
  )
}

export default memo(RoomCard)
