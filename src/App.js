import { Content } from './Content'
import { Navbar } from './navbar'
import './App.scss'

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Content />
      </main>
    </>
  )
}
