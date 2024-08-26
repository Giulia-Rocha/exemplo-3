import Nav  from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'


function App() {
  

  return (
    <>
      <Nav/>
      {/*CHAMANDO TODOS OS COMPONENTES FILHOS*/}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
