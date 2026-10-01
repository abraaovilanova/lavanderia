import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Profile(){
    return (
        <div className="App">
            <Stack direction="column" spacing={2}>
                <p style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}><Avatar alt="Abraão Vila" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} /></p>
                <p><strong>Nome:</strong> Abraão Vila Nova</p>
                <p><strong>Apartamento:</strong> 301</p>
                <p><strong>Email:</strong> abraaovilanova@gmail.com</p>
                <p><strong>Telefone/Celular:</strong> (81) 99163-5662</p>
            </Stack>
            <br />
            <Stack spacing={2}>
               <Button variant="contained">Alterar Senha</Button> 
            </Stack>
        </div>
    )
}


export default Profile;