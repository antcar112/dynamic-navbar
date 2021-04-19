import { useScroll } from '../hooks'
import './Navbar.scss'

export const Navbar = () => {
  const { scrollY } = useScroll()

  return (
    <nav className={`${scrollY > 50 ? 'stuck' : ''}`}>
      <div className='logo'>
        <span>Logo</span>
      </div>
      <div className='links'>
        <button className='link'>
          <span className='icon'>😁</span> <span className='text'>Link 1</span>
        </button>
        <button className='link'>
          <span className='icon'>😎</span> <span className='text'>Link 2</span>
        </button>
        <button className='link'>
          <span className='icon'>😴</span> <span className='text'>Link 3</span>
        </button>
      </div>
      <div className='account'>
        {/* <div className='name'>
          My long name that keeps going and going and going and going and going and going
        </div> */}
        <div className='name'>Username</div>
        <span>Action</span>
      </div>
    </nav>
  )
}
