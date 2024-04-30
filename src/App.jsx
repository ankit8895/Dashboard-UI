import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLayout from './Layout/PageLayout';

import ProjectOverviewPage from './pages/ProjectOverviewPage';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<ProjectOverviewPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
