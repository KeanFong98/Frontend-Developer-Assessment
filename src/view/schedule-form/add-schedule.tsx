import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Card, Grid, Checkbox, FormControlLabel, Button, CardHeader, CardContent, Select, MenuItem } from '@mui/material';
import { sleepSchedulesType } from '../../types/types';

const AddScheduleForm = () => {
  const [bedtime, setBedtime] = useState<dayjs.Dayjs | null>(null);
  const [hours, setHours] = useState<number | ''>('');
  const [minutes, setMinutes] = useState<number | ''>('');
  const [notification, setNotification] = useState(true);
  const [woke, setWoke] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Convert hours and minutes to numbers
    const hoursNum = typeof hours === 'number' ? hours : parseInt(hours);
    const minutesNum = typeof minutes === 'number' ? minutes : parseInt(minutes);
    // Collect form data
    const formData = {
      date: dayjs().format('YYYY-MM-DD'),
      date_bedtime: bedtime?.format('YYYY-MM-DD HH:mm:ss') || '',
      alert_on_bedtime: notification,
      date_wake: woke ? bedtime?.add(hoursNum, 'hours').add(minutesNum, 'minutes').format('YYYY-MM-DD HH:mm:ss') : '',
      alert_on_wake: woke,
    };

    // Save data to localStorage
    localStorage.setItem('sleepSchedule', JSON.stringify(formData));
  };

  return (
    <Card>
      <CardHeader title='Add Schedule' />
      <CardContent>
        <form  onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} sx={{display:"flex", flexDirection:"column"}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Bedtime"
                  value={bedtime}
                  onChange={(newValue) => setBedtime(newValue)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid sx={{display: 'flex', gap: '10px'}} item xs={12} md={6}>
              <Select
                value={hours}
                onChange={(e) => setHours(e.target.value as number)}
                fullWidth
              >
                <MenuItem value={''}>Hours</MenuItem>
                {[...Array(24)].map((_, index) => (
                  <MenuItem key={index} value={index}>{index}</MenuItem>
                ))}
              </Select>
              <Select
                value={minutes}
                onChange={(e) => setMinutes(e.target.value as number)}
                fullWidth
              >
                <MenuItem value={''}>Minutes</MenuItem>
                {[...Array(60)].map((_, index) => (
                  <MenuItem key={index} value={index}>{index}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Checkbox checked={notification} onChange={(e) => setNotification(e.target.checked)} />}
                label="Notify me on bed"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Checkbox checked={woke} onChange={(e) => setWoke(e.target.checked)} />}
                label="Woke me up (Alarm)"
              />
            </Grid>
            <Grid className='AddButton' item xs={12}>
              <Button type="submit" variant="contained" color="primary">Add</Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddScheduleForm;
