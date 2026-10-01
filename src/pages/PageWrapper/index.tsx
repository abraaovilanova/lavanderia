import { useState} from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TodayIcon from '@mui/icons-material/Today';
import Box from '@mui/material/Box'
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';


type Props = {
    children: React.ReactNode
}

function PageWrapper({ children }: Props) {
    const [value, setValue] = useState<number>(0);
     let navigate = useNavigate();
    return (
        <div>
            <Box>
                {children}
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    color="success"
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        if(newValue == 0){
                            navigate('/profile')
                        }else if(newValue == 1){
                            navigate('/')
                        }else if(newValue == 2){
                            navigate('/book')
                        }
                    }}>
                    <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
                    <BottomNavigationAction label="Agendar" icon={<CalendarMonthIcon />} />
                    <BottomNavigationAction label="Meus horários" icon={<TodayIcon />} />
                    <BottomNavigationAction label="Sair" icon={<LogoutIcon />} />
                </BottomNavigation>
            </Paper >
        </div>
    )
}

export default PageWrapper;