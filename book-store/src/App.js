import { Outlet } from 'react-router-dom';
import '../src/style-scss/style.scss';
import Footer from './components/components-shared/Footer';
import Header from './components/components-shared/Header';




function App () {
    return (
        <>
            <Header></Header>
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default App
