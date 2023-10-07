import './App.css'
import {Route,Routes} from "react-router-dom"
import Index from "./pages/Index"
import LoginPage from './pages/LoginPage'
import Layout from './Layout'

function App() {
  return (
      <Routes>
        <Route path='/' element ={<Layout/>}>
        <Route index element={<Index/>} />
        <Route path="/login" element={<LoginPage/>} />
        </Route>
     </Routes> 
     )
    }
export default App
