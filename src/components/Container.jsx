import Navbar from './Navbar'
import Cards from './Cards'
import Graph from './Graph'
import Products from './Products'

const Container = () => {
    return (
        <div className="container">
            <Navbar />
            <Cards />
            <Graph />
            <Products />
        </div>
    )
}

export default Container
