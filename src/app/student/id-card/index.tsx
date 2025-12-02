import React from 'react';

import FlexibleFilter from '../../../components/Filter';

const placeholderFilterConfig = { title: 'ID Card', filters: [] as any[], enableSearch: false };

const IdCardPage: React.FC = () => {
  return (
    <>
      <section>
        <FlexibleFilter config={placeholderFilterConfig} onSearch={() => { }} onViewChange={() => { }} />
      </section>
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
        <h3>ID Card</h3>
        <p>Placeholder content for ID Card page.</p>
      </main>
    </>
  );
};

export default IdCardPage;
