import React from 'react';
import { Grid, Typography } from '@mui/material';
import BarGraph from '../../view/bar-graph/slept-bar';
import Calendar from '../../view/bar-graph/calendar';
import 'chart.js/auto'

const SleepSchedulePage = () => {
  const barChartBlue = '#5579C6';
  const barChartPurple = '#957DAD';
  const labelColor = 'rgba(47,43,61,0.42)';
  const borderColor = 'rgba(47,43,61,0.16)';

  return (
    <Grid container spacing={5} justifyContent="center">
      <Grid sx={{marginTop: '30px'}} item xs={12}>
        <Typography variant='h4' align="center">
            Sleep Schedule
        </Typography>
      </Grid>
      <Grid sx={{display:'flex'}} item xs={12}>
        <Grid item xs={12} md={3}></Grid>
        <Grid sx={{paddingLeft:'30px',paddingRight:'30px'}} item xs={12} md={6}>
          <BarGraph 
            blue={barChartBlue}
            purple={barChartPurple} 
          />
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
      <Grid sx={{display:'flex'}} item xs={12}>
        <Grid item xs={12} md={3}></Grid>
        <Grid sx={{paddingLeft:'30px',paddingRight:'30px'}} item xs={12} md={6}>
          <Calendar/>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </Grid>
  );
};

export default SleepSchedulePage;
