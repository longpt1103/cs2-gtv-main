import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectIsPending } from 'components/steam/selectors'
import TableHeader from './TableHeader'
import Body from './Body'
import Watcher from './Watcher'
import Loading from './Loading'
import Pagination from './Pagination'

const Table = () => {
  const isLoading = useSelector(selectIsPending)
  return (
    <>
      <div className="table-wrapper">
        <Watcher />
        {isLoading ? (
          <Loading />
        ) : (
          <table className="table">
            <TableHeader />
            <Body />
          </table>
        )}
      </div>
      {!isLoading && <Pagination />}
    </>
  )
}

export default memo(Table)
