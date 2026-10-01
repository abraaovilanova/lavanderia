import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { TimeView } from '@mui/x-date-pickers/models';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TodayIcon from '@mui/icons-material/Today';
import './App.css'


const shouldDisableTime = (date: Dayjs, view: TimeView) => {
  const hour = date.hour();
  if (view === 'hours') {
    return hour < 6 || hour > 22;
  }
  return false;
};

function App() {
  const [dateValue, setDateValue] = useState<Dayjs | null>()
  const [timeValue, setTimeValue] = useState<Dayjs | null>()

  return (
    <div className="App">
      <h1>Edificio Studio Sciortino: Lavanderia</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <DatePicker
            label="Selecione uma data"
            onChange={(newValue) => setDateValue(newValue)}
            value={dateValue}
            minDate={dayjs()}
            maxDate={dayjs().add(7, 'day')}
          />
        </Container>
        {dateValue && (
          <Container sx={{ m: 2}}>
            <DigitalClock
              defaultValue={dateValue}
              ampm={false}
              onChange={(newValue) => setTimeValue(newValue)}
              value={timeValue}
              timeStep={120}
              maxTime={dayjs().set('hour', 22)}
              minTime={dayjs().set('hour', 6)}
              shouldDisableTime={(value, view) => shouldDisableTime(value, view)}
              skipDisabled
            />
          </Container>
        )
        }
      </LocalizationProvider>
      <Container sx={{ m: 2}}>
        {timeValue && (
          <Button variant="contained" color="success" onClick={()=>{
            console.log(timeValue)
          }}>
            Reservar Horário selecionado
          </Button>
          )}
      </Container>
    </div>
  );
}

export default App;
