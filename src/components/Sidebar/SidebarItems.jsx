import React from 'react';

import Overview from './Overview';
import TaskList from './TaskList';
import ProjectOverview from './ProjectOverview';
import Calender from './Calender';
import Settings from './Settings';
import Personal from './Personal';
import Design from './Design';
import Development from './Development';
import Research from './Research';

const SidebarItems = () => {
  return (
    <>
      <Overview />
      <TaskList />
      <ProjectOverview />
      <Calender />
      <Settings />
      <Personal />
      <Design />
      <Development />
      <Research />
    </>
  );
};

export default SidebarItems;
