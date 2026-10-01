import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

function Book() {
    return (
        <div className="App">
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h2" gutterBottom>Meu Agendamento</Typography >
                <Card>
                    <p>Apartamento: 301</p>
                    <p>Dia: 01/10/2026</p>
                    <p>Horário: 10:00 - 12:00</p>
                    <p>Cancelar</p>
                    <p></p>
                    <CardActions>
                        <Button size="small" startIcon={<DeleteIcon />} variant="outlined" >Cancelar</Button>
                        <Button size="small" startIcon={<EditCalendarIcon />} variant="outlined">Mudar Horário</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default Book;