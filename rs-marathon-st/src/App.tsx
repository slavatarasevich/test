import React, { Suspense } from 'react';
import { Routes, Route, Form } from 'react-router-dom';
import Header from './components/Header';
import FormPage from './pages/Form';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<>Loading...</>}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    );
  }
}

export default App;
