import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectPage, selectServerListLength } from 'components/steam/selectors'
import { getStartEndIndexPage } from 'utils/steam'
import { goToPage } from 'utils/route'

const Pagination = () => {
  const page = useSelector(selectPage)
  const listLength = useSelector(selectServerListLength)
  const { disabledEnd, disabledStart, isHide } = getStartEndIndexPage({
    page,
    listLength,
  })
  const control = (type = 'next') => {
    if (type === 'next') goToPage(page + 1)
    else goToPage(page - 1)
  }
  if (!listLength || isHide) return null
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="btn-group mx-auto">
        <button
          className="btn btn-outline-white"
          disabled={disabledStart}
          onClick={() => control('prev')}
        >
          Prev
        </button>
        <button
          className="btn btn-outline-white"
          disabled={disabledEnd}
          onClick={() => control('next')}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default memo(Pagination)
