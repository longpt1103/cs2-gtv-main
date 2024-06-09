import { NavLink } from 'react-router-dom'
import { buttons as navLinkButton } from 'data'
import { generateGameModePath } from 'utils/route'

const BtnGroupGameMode = () => {
  return (
    <div className="btn-groups">
      {navLinkButton.map(({ id, mode, text }) => (
        <NavLink
          key={id}
          className="btn btn--small text-uppercase btn-default"
          activeClassName="btn-active"
          to={generateGameModePath(mode)}
        >
          {text}
        </NavLink>
      ))}
    </div>
  )
}

export default BtnGroupGameMode
