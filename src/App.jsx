import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/404" element={<ErrorPage />} />

        </Routes>

      </Router>
    </>
  );
};

export default App;
