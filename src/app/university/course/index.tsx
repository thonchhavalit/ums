import React from 'react';
import FlexibleFilter from '../../../components/Filter';

const placeholderFilterConfig = { title: 'Courses', filters: [] as any[], enableSearch: false };

const CoursePage: React.FC = () => {
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
				<h3>Courses</h3>
				<p>Placeholder content for Courses page.</p>
			</main>
		</>
	);
};

export default CoursePage;
