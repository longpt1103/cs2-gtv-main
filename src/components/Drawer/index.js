import { NavLink, Link } from 'react-router-dom'
import { routes } from 'route-path'
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg'
import { ReactComponent as BanIcon } from 'assets/icons/ban.svg'
import { ReactComponent as MutedIcon } from 'assets/icons/muted.svg'
import { ReactComponent as ServerIcon } from 'assets/icons/server-medium.svg'

const navMenu = [
  { id: 2, text: 'Ban', icon: BanIcon, to: routes.ban },
  { id: 3, text: 'Cấm chat', icon: MutedIcon, to: routes.muted },
]

const NavLinkItem = ({ id, text = '', icon: Icon }) => {
  return (
    <>
      <a
        id={'Tooltip-' + id}
        className="item"
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Icon className="icon" />
        <span className="item-text text-normal fw-bold text-color-contentTertiary">
          {text}
        </span>
        <div
          className="tooltip custom-tooltip bs-tooltip-auto"
          data-popper-placement="right"
        >
          <div className="tooltip-inner" role="tooltip">
            Coming soon
          </div>
          <span className="arrow tooltip-arrow"></span>
        </div>
      </a>
    </>
  )
}

const NavLinkHome = () => {
  const isActive = (match, location) => {
    if (!match) {
      if (location?.pathname === routes.home) return true
      return false
    }
    return true
  }
  return (
    <NavLink
      className="item"
      activeClassName="active"
      to={routes.gamemodeList}
      isActive={isActive}
    >
      <ServerIcon className="icon" />
      <div className="item-text text-normal fw-bold text-color-contentTertiary">
        Server
      </div>
    </NavLink>
  )
}

const Drawer = () => {
  return (
    <div className="drawer centered-menu saira-extra-condensed">
      <Link className="logo-top" to="/">
        <LogoIcon className="logo-icon" />
        <div className="logo-text">GPlay CS2 Community Server</div>
      </Link>
      <div className="menu">
        <NavLinkHome />
        {navMenu.map((item) => (
          <NavLinkItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Drawer
