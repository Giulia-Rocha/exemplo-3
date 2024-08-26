import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*DEPENDÊNCIAS PARA CRIAR AS ROTAS*/
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'
{/*CRIANDO A FUNÇÃO CREATEBROWSERROTER*/}

const router = createBrowserRouter([
  {
    /*CHAMANDO OS ELEMENTOS PAI*/
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //CHAMNADO OS ELEMENTOS FILHOS
    children:[
      //Criando a ROta Home
      {path: '/', element:<Home/>},
      //Criando a rota Aluno
      {path: '/aluno', element: <Aluno/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Criando o props que será renderizado*/}
    <RouterProvider router={router}/>
  </StrictMode>,
)
