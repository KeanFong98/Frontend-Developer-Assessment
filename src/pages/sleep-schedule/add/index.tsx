import React from 'react';
import { Grid } from '@mui/material'
import AddScheduleForm from '../../../view/schedule-form/add-schedule'

const AddSleepSchedulePage = () => {
    return (
        <Grid sx={{marginTop: '50px' }} spacing={5} justifyContent="center">
            <Grid>
                <AddScheduleForm />
            </Grid>
        </Grid>
      )
};

export default AddSleepSchedulePage;
