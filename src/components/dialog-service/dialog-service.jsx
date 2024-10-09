import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Snackbar, Alert ,CircularProgress} from '@mui/material';
import emailjs from 'emailjs-com';
import './dialog-service.css';

const BookingDialog = ({ open, onClose, selectedService }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loading, setLoading] = useState(false); // סטייט לטעינה

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      service_name: selectedService,
    };

    setLoading(true); // להפעיל את מחוון הטעינה


    try {
      // שליחת פרטי הטופס ל-EmailJS
      const response = await emailjs.send('service_3sag37w', 'template_yftyhk6', templateParams, '8i3CrRe_iNVwBi3vW');
      setFormData({ name: '', email: '', phone: '' });
      setSnackbarMessage('ההודעה נשלחה בהצלחה!'); // טקסט להודעה
      setOpenSnackbar(true); // פתיחת ה-Snackbar
      onClose(); // סגירת הדיאלוג לאחר שליחה
    } catch (err) {
      setSnackbarMessage('שגיאה בשליחת ההודעה, נסה שוב.'); // טקסט לשגיאה
      setOpenSnackbar(true); // פתיחת ה-Snackbar
    }
    finally {
      setLoading(false); // לכבות את מחוון הטעינה בכל מקרה
  }
  };


  return (
    <>

      <Dialog open={open} onClose={onClose} className="dialog-service">
        <DialogTitle className="title-dialog">רוצים לדעת עוד על שיר ל{selectedService}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="שם מלא"
            type="text"
            fullWidth
            variant="standard"
            className="textfield-rtl"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="email"
            label="כתובת אימייל"
            type="email"
            fullWidth
            variant="standard"
            className="textfield-rtl"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="phone"
            label="מספר טלפון"
            type="tel"
            fullWidth
            variant="standard"
            className="textfield-rtl"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogTitle className="p-down">שלחו לנו ונחזור אליכם בהקדם!</DialogTitle>
        <DialogActions className="action-button">
          <Button onClick={onClose} className="button-cencel">
            ביטול
          </Button>
          <Button onClick={handleSubmit} className="button-ok" disabled={loading}>
          {loading ? <CircularProgress size={25} className="circel" /> : 'שלח'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }} open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </>
  );
};

export default BookingDialog;
