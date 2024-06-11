import { NavLink } from 'react-router-dom'
import { filterHideButtons as navLinkButton } from 'data'
import { generateGameModePath } from 'utils/route'

const BtnGroupGameMode = () => {
  return (
    <div className="btn-groups">
      {navLinkButton.map(({ id, modePath, text, comingSoon }) => {
        if (comingSoon)
          return (
            <button
              key={id}
              className="btn btn--small text-uppercase btn-default"
              disabled={true}
            >
              {text}
            </button>
          )
        return (
          <NavLink
            key={id}
            className="btn btn--small text-uppercase btn-default"
            activeClassName="btn-active"
            to={generateGameModePath(modePath)}
          >
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default BtnGroupGameMode
