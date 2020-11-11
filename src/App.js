import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Made from './components/Made';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Made />
      </main>
      <Footer />
    </div>
  );
}

export default App;
