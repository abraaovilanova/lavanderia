import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase'
import { signInAnonymously } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';

function fillNumber(value:number, digits:number, fill:string){
    return value.toString().padStart(digits, fill)

}
function timestampToLocalHour(timestamp:number, dateFormat:string){
    const date = new Date(timestamp * 1000);
    const day:number = date.getDay()
    const mounth:number = date.getMonth()
    const year:number = date.getFullYear()
    const hours:number = date.getHours()
    const minutes:number = date.getMinutes()

    if(dateFormat == 'dd/mm/aa'){
        return `${fillNumber(day, 2, '0')}/${fillNumber(mounth, 2, '0')}/${year}`
    }
    if(dateFormat == 'HH:mm'){
        return `${fillNumber(hours, 2, '0')}:${fillNumber(minutes, 2, '0')}`
    }
}

function Book() {
    const [bookData, setBookData] = useState<DocumentData | undefined>(undefined)

    useEffect(() => {
        let isMounted = true;

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                // 1. Sign in anonymously if no session exists
                if (!user) {
                    const userCredential = await signInAnonymously(auth);
                    user = userCredential.user;
                }

                console.log("Authenticated UID:", user.uid);

                // 2. Fetch document
                const docRef = doc(db, "books", "8Hl9h3DV1dYcVqEpLIOz");
                const docSnap = await getDoc(docRef);

                if (isMounted && docSnap.exists()) {
                    console.log("Book Data:", docSnap.data());
                    setBookData(docSnap.data())
                }
            } catch (error: any) {
                if (!isMounted) return;

                // Handle expected permission or network errors cleanly
                if (error.code === 'permission-denied') {
                    console.error("Firestore Error: Check your Security Rules in Firebase Console.");
                } else {
                    console.error("Error during Auth/Firestore execution:", error);
                }
            }
        });

        return () => {
            isMounted = false;
            unsubscribe();
        };
    }, []);

    return (
        <div className="App">
            <Box 
                sx={
                    { 
                        width: '100%',
                        maxWidth: 500,
                        display:'flex',
                        flexDirection:'column', 
                        justifyContent: 'center', 
                        alignItems:'center' 
                    }
                }>
                <Typography variant="h2" gutterBottom>Meu Agendamento</Typography >
                <Card>
                    <p>Agendamento: {bookData?.aproved ? 'Aprovado' : 'Aguardando aprovação'}</p>
                    <p>Apartamento: {bookData?.apto}</p>
                    <p>Dia: {timestampToLocalHour(bookData?.startDate.seconds, 'dd/mm/aa')}</p>
                    <p>Horário: {timestampToLocalHour(bookData?.startDate.seconds, 'HH:mm')} - {timestampToLocalHour(bookData?.endDate.seconds, 'HH:mm')}</p>
                    <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button color="error" size="small" startIcon={<DeleteIcon />} variant="outlined" >Cancelar</Button>
                        <Button size="small" startIcon={<EditCalendarIcon />} variant="outlined">Mudar Horário</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default Book;