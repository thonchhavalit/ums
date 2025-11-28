import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { TuitionFeeList, TuitionFeeForm } from './app/financial/tuition-fee';
import StudentPage from './app/student/information';
import StudentRegisterPage from './app/student/register';
import StudentReportPage from './app/student/report';
import IdCardPage from './app/student/id-card';
import AppLayout from './app/layout';
import DashboardPage from './app/dashboard';
import FacultyPage from './app/university/faculty';
import DepartmentPage from './app/university/department';
import MajorPage from './app/university/major';
import CoursePage from './app/university/course';
import FeeManagementPage from './app/financial/fee-management';
import FeeCollectionPage from './app/financial/fee-collection';
import InvoicePage from './app/financial/invoice';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Financial */}
            <Route path="/financial/tuition" element={<TuitionFeeList />} />
            <Route path="/tuition" element={<TuitionFeeList />} />
            <Route path="/tuition-form" element={<TuitionFeeForm />} />
            <Route path="/financial/fees" element={<FeeManagementPage />} />
            <Route path="/financial/invoice" element={<InvoicePage />} />
            <Route path="/financial/collection" element={<FeeCollectionPage />} />

            {/* Student */}
            <Route path='/student/info' element={<StudentPage />} />
            <Route path='/student/registration' element={<StudentRegisterPage />} />
            <Route path='/student/reports' element={<StudentReportPage />} />
            <Route path='/idcard/list' element={<IdCardPage />} />
            <Route path='/idcard/generate' element={<IdCardPage />} />

            {/* University */}
            <Route path='/university/faculties' element={<FacultyPage />} />
            <Route path='/university/departments' element={<DepartmentPage />} />
            <Route path='/university/majors' element={<MajorPage />} />
            <Route path='/university/courses' element={<CoursePage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;