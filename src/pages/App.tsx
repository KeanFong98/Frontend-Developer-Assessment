import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarGraph from './sleep-schedule';
import AddScheduleForm from './sleep-schedule/add';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
      		<Route path="/" element={<BarGraph/>} />
			<Route path="/sleep-schedule/add" element={<AddScheduleForm/>} />
		</Routes>
	</BrowserRouter>
);

export default App