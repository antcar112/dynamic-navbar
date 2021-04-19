import { useState } from 'react'
import { useScroll } from '../hooks'
import { Navlink } from './Navlink'
import './Navbar.scss'

const subNavItems = {
  '1': ['A', 'B', 'C'],
  '2': ['D', 'E', 'F'],
  '3': ['G', 'H', 'I'],
}

export const Navbar = () => {
  const [subNav, setSubNav] = useState(null)
  const { scrollY } = useScroll()

  return (
    <nav className={`${scrollY > 50 ? 'stuck' : ''}`}>
      <div className='logo'>
        <span>Logo</span>
      </div>
      <div className='links'>
        <Navlink icon='😁' setSubNav={setSubNav} id={'1'} active={subNav === '1'}>
          Link 1
        </Navlink>
        <Navlink icon='😎' setSubNav={setSubNav} id={'2'} active={subNav === '2'}>
          Link 2
        </Navlink>
        <Navlink icon='😴' setSubNav={setSubNav} id={'3'} active={subNav === '3'}>
          Link 3
        </Navlink>
      </div>
      <div className='account'>
        {/* <div className='name'>
          My long name that keeps going and going and going and going and going and going
        </div> */}
        <div className='name'>Username</div>
        <span>Action</span>
      </div>
      <div class={`subnav ${subNav ? 'subnav--show' : ''}`}>
        {subNavItems[subNav] && subNavItems[subNav].map(item => <span>{item}</span>) }
      </div>
    </nav>
  )
}
