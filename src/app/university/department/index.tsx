import React from 'react';
import FlexibleFilter from '../../../components/Filter';

const placeholderFilterConfig = { title: 'Departments', filters: [] as any[], enableSearch: false };

const DepartmentPage: React.FC = () => {
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
				<h3>Departments</h3>
				<p>Placeholder content for Departments page.</p>
			</main>
		</>
	);
};

export default DepartmentPage;
