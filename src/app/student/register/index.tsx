import React from 'react';

import StudentRegisterForm from './page/Form';


const StudentRegisterPage: React.FC = () => {
  return (
    <main
      style={{
        background: '#fff',
        padding: 24,
        borderRadius: 4,
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        height: 'calc(100vh - 150px)',
        overflowY: 'auto',
      }}
    >
      <StudentRegisterForm />
    </main>
  );
};

export default StudentRegisterPage;