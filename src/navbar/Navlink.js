import { useMenu } from '../hooks'
import './Navlink.scss'

export const Navlink = ({ active, children, icon, id, setSubNav }) => {
  const { ref, handleClick } = useMenu({
    onClickInside: () => setSubNav(id),
    onClickOutside: () => setSubNav(null),
  })

  return (
    <button ref={ref} className={`link ${active ? 'link--active' : ''}`} onClick={handleClick}>
      <span className='icon'>{icon}</span>
      <span className='text'>{children}</span>
    </button>
  )
}
