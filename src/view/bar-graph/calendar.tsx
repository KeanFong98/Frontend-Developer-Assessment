import { Button, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function InlineDemo() {

    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column' }} container>
            <Typography variant='h4' align="center">
                Your Schedule
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
            <Link href='/sleep-schedule/add' sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <Button variant='contained'>Add Schedule</Button>
            </Link>
        </Grid>
    );
}
