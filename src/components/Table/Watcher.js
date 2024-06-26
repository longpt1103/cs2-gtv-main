import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchServerList } from 'components/steam/slices/asyncThunk'
import { steamActions as actions } from 'components/steam/slices'
import { isIncludeGameModeParam } from 'utils/route'
import { getServerListPage } from 'utils/steam'

const Watcher = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const location = useLocation()
  useEffect(() => {
    const mode = params?.mode
    if (isIncludeGameModeParam(mode)) {
      dispatch(fetchServerList({ mode }))
    }
    return () => {
      dispatch(actions.resetPage())
    }
  }, [params?.mode])
  useEffect(() => {
    const search = location.search
    const page = getServerListPage(search)
    dispatch(actions.changePage(page))
  }, [location.search])
  return null
}

export default Watcher
