import React from 'react';
import {
  Box,
} from '@mui/material';

import DashboardNavbar from './components/DashboardNavbar';
import SpecialistTable from './components/SpecialistTable';


const ServicesDashboard: React.FC = () => {

  return (
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <DashboardNavbar />
        <SpecialistTable />
      </Box>
  );
};

export default ServicesDashboard;