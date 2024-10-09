import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert, Snackbar, CircularProgress } from '@mui/material';
import emailjs from 'emailjs-com';
import './contact-page.css';
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });
    const [loading, setLoading] = useState(false); // סטייט לטעינה

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            message: formData.message,
        };

        setLoading(true); // להפעיל את מחוון הטעינה

        try {
            // שליחת פרטי הטופס ל-EmailJS
            const response = await emailjs.send('service_3sag37w', 'template_in7j6pf', templateParams, '8i3CrRe_iNVwBi3vW');
            setAlert({ open: true, message: 'ההודעה נשלחה בהצלחה!', severity: 'success' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } 
        catch (err) {
            setAlert({ open: true, message: 'שליחת ההודעה נכשלה. נסה שוב.', severity: 'error' });
        } 
        finally {
            setLoading(false); // לכבות את מחוון הטעינה בכל מקרה
        }
    };

    const handleCloseAlert = () => {
        setAlert({ open: false, message: '', severity: '' });
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }} className="contact-page">
            <Typography variant="h4" gutterBottom style={{ color: 'white' }} className="zor-kesher">
                צרו איתי קשר
            </Typography>
            <form onSubmit={handleSubmit} className="form-input" >
                <Box mb={3}>
                    <TextField
                        label="שם מלא"
                        variant="filled"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ backgroundColor: 'white', direction: 'rtl' }}
                        className="input-textfild"
                    />
                </Box>
                <Box mb={3}>
                    <TextField
                        label="טלפון"
                        variant="filled"
                        fullWidth
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        type="phone"
                        style={{ backgroundColor: 'white', direction: 'rtl' }}
                        className="input-textfild"

                    />
                </Box>
                <Box mb={3}>
                    <TextField
                        label="אימייל"
                        variant="filled"
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        style={{ backgroundColor: 'white', direction: 'rtl' }}
                        className="input-textfild"

                    />
                </Box>
                <Box mb={3}>
                    <TextField
                        label="הודעה"
                        variant="filled"
                        fullWidth
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        style={{ backgroundColor: 'white', direction: 'rtl' }}
                        className="input-textfild"

                    />
                </Box>
                <Button variant="contained" color="primary" type="submit" className="button-send" disabled={loading}>
                    {loading ? <CircularProgress size={25} className="circel" /> : 'שלח'}
                </Button>
            </form>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={alert.open}
                autoHideDuration={5000}
                onClose={handleCloseAlert}
            >
                <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ fontSize: '16px', padding: '10px' }}>
                    {alert.message}
                </Alert>
            </Snackbar>

        </Container>
    );
}
