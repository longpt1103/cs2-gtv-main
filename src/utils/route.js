import { generatePath } from 'react-router-dom'
import { routes } from 'route-path'
import history from './history'
import { FILTER_GAMEMODE_VALUES } from 'utils/constants'

export const generateGameModePath = (mode = '') => {
  return generatePath(routes.gamemodeType, { mode })
}

export const pushToGameModePath = (mode = '') => {
  if (history) {
    history.push(generateGameModePath(mode))
  }
}

export const goToPage = (page) => {
  const pathname = window.location.pathname
  history.push(`${pathname}?page=${page}`)
}

export const isIncludeGameModeParam = (mode = '') => {
  return FILTER_GAMEMODE_VALUES.includes(mode)
}
