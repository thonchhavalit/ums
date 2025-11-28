import React from 'react';

import FlexibleFilter from '../../../components/Filter';

const placeholderFilterConfig = { title: 'Student Registration', filters: [] as any[], enableSearch: false };

const StudentRegisterPage: React.FC = () => {
  return (
    <>
      <section>
        <FlexibleFilter config={placeholderFilterConfig} onSearch={() => {}} onViewChange={() => {}} />
      </section>
      <main
        style={{
          background: '#fff',
          padding: 24,
          borderRadius: 4,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }}
      >
        <h3>Student Registration</h3>
        <p>Placeholder content for Student Registration page.</p>
      </main>
    </>
  );
};

export default StudentRegisterPage;
