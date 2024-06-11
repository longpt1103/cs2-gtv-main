import { generatePath } from 'react-router-dom'
import { routes } from 'route-path'
import history from './history'
import { ROUTE_FILTER_GAMEMODE } from 'utils/constants'

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
  return ROUTE_FILTER_GAMEMODE.includes(mode)
}
