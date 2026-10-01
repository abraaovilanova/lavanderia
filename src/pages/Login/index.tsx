import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Login(){
    return (
        <div className="App">
            <Box>
                <Box>
                    Login
                </Box>
                <Stack spacing={2}>
                    <TextField label="Apartamento (ex: 301)" />
                    <TextField label="Senha" type="password" />
                     <Button variant="contained">Entrar</Button>
                     <Button variant="outlined">Solicitar Acesso</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default Login;