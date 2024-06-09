import { useState } from 'react'
import clsx from 'clsx'
import { Collapse, NavbarToggler } from 'reactstrap'
import Auth from './Auth'

const Header = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div className="header-top-wrapper">
      <header className="header navbar-expand-md navbar-dark flex-wrap flex-md-nowrap">
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <div
            className={clsx(
              'd-flex w-100 justify-content-md-between',
              'flex-wrap flex-md-nowrap',
              'flex-column flex-md-row',
              'pt-4 pt-md-0',
            )}
          >
            <div
              className={clsx(
                'nav-item nav-item-left',
                'd-flex align-items-md-center',
              )}
            >
              <button className="btn btn-outline-white first-letter-game-red first-letter-game-red">
                GPlay
              </button>
              <button className="btn btn-outline-white first-letter-game-red">
                GPlay CS2
              </button>
            </div>
            <Auth />
          </div>
        </Collapse>
      </header>
    </div>
  )
}

export default Header
