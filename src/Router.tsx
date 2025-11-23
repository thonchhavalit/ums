import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { TuitionFeeList, TuitionFeeForm, } from './app/tuition-fee';
import StudentPage from './app/student';
import AppLayout from './app/layout';
import DashboardPage from './app/dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/tuition" element={<TuitionFeeList />} />
            <Route path="/tuition-form" element={<TuitionFeeForm />} />
            <Route path='/student/info' element={<StudentPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
