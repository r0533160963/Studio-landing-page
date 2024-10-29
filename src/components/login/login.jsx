import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../../firebase';
import { Button, Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './login.css';

function Login() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const authorizedEmails = ['r0533160963@gmail.com', 'rachel160963@gmail.com'];

    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success'); 
    const [openAlert, setOpenAlert] = useState(false);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const userEmail = result.user.email;

            if (authorizedEmails.includes(userEmail)) {
                setAlertMessage(`Welcome, ${result.user.displayName}`);
                setAlertSeverity('success');
                setOpenAlert(true);
                navigate('/requests'); 
            } else {
                setAlertMessage('הגישה נדחתה: אימייל לא מורשה');
                setAlertSeverity('error');
                setOpenAlert(true);
                auth.signOut();
            }
        } catch (error) {
            console.error('Error during login', error);
            if (error.code === 'auth/popup-closed-by-user') {
                setAlertMessage('החלון הקופץ נסגר לפני השלמת הכניסה. אנא נסה שוב.');
            } else if (error.code === 'auth/cross-origin-redirect') {
                setAlertMessage('הייתה בעיה בהפניה מחדש בין מקורות צולבים. בדוק את הגדרות Firebase שלך.');
            } else {
                setAlertMessage('הכניסה נכשלה, אנא נסה שוב.');
            }
            setAlertSeverity('error');
            setOpenAlert(true);
        }
    };

    const handleGoHome = () => {
        navigate('/'); 
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    return (
        <div className="login-page">
            <div>
                <Button variant="outlined" onClick={handleGoHome} className="button-home"> 
                    <ArrowForwardIcon />
                </Button>
            </div>
            <div className='button-login-home'>
                <h2>כניסה למנהל המערכת</h2>
                <Button variant="outlined" onClick={handleLogin} className="button-login">
                    התחברות ע"י Google
                </Button>
                <br />
            </div>
            <img src='/images/israel-palacio-Y20JJ_ddy9M-unsplash.jpg' className='image-login' />

            <Snackbar 
                open={openAlert} 
                autoHideDuration={6000} 
                onClose={handleCloseAlert} 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Login;
