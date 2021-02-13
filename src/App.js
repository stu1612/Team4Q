import { Home } from './pages/Home';
import { GlobalStyle } from './components/global-styles/GlobalStyles.component';
import { Footer } from './components/footer/Footer';

function App() {
    return (
        <div className='App'>
            <GlobalStyle />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
