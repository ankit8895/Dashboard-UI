import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLayout from './Layout/PageLayout';

import ProjectOverviewPage from './pages/ProjectOverviewPage';
import CalenderPage from './pages/CalenderPage';
import DesignPage from './pages/DesignPage';
import DevelopmentPage from './pages/DevelopmentPage';
import ResearchPage from './pages/ResearchPage';
import OverviewPage from './pages/OverviewPage';
import SettingsPage from './pages/SettingsPage';
import TaskListPage from './pages/TaskListPage';
import PersonalPage from './pages/PersonalPage';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<ProjectOverviewPage />} />
        <Route path='/calender' element={<CalenderPage />} />
        <Route path='/design' element={<DesignPage />} />
        <Route path='/development' element={<DevelopmentPage />} />
        <Route path='/overview' element={<OverviewPage />} />
        <Route path='/research' element={<ResearchPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/tasklist' element={<TaskListPage />} />
        <Route path='/personal' element={<PersonalPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
