import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <main className='home container-fluid'>
        <h2>Bienvenido a</h2> 
        <h1>Libre Mercado</h1>
        <Link to={"/products"} className="btn home-btn">Ver Productos</Link>
    </main>
  )
}

export default Home