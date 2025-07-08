import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import TaskPage from './pages/tasks/TaskPage';

import './scss/site-styles.scss';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="tasks/:id" element={<TaskPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
