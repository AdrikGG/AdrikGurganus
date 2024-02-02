import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <div className="content">
          <Routes>
            <Route exact path="/AdrikGurganus/" element={<About />} />
            <Route exact path="/AdrikGurganus/resume" element={<Resume />} />
            <Route
              exact
              path="/AdrikGurganus/projects"
              element={<Projects />}
            />
            <Route exact path="/AdrikGurganus/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
