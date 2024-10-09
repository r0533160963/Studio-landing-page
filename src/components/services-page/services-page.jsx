import React, { useState } from 'react';
import { Button } from '@mui/material';
import BookingDialog from '../dialog-service/dialog-service'; // ייבוא של דיאלוג
import './services-page.css'; // נניח שיש לך קובץ CSS לעיצוב

const ServicesPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const images = [
    {
      src: "../public/adi-goldstein-Hli3R6LKibo-unsplash.jpg",
      title: 'יום הולדת',
      description: 'יום הולדת זה הזמן לפנק , ולתת לכישרון שלכם צליל.',
      buttonText: 'לפרטים נוספים'
    },
    {
      src: "../public/justin-heap-6kjujXU56WY-unsplash.jpg",
      title: 'בת מצווה',
      description: 'זו ההזדמנות לתת לילדה שלכם את הבמה.',
      buttonText: 'לפרטים נוספים'
    },
    {
      src: "../public/matthieu-joannon-6ciLddToTgM-unsplash.jpg",
      title: 'ארוע משפחתי',
      description: 'אירוע משפחתי זו ההזדמנות לחלוק רגעים משמחים עם כל האהובים.',
      buttonText: 'לפרטים נוספים'
    },
    {
      src: "../public/edwin-petrus-GenlGZhrmnM-unsplash.jpg",
      title: 'בתי ספר וסמינרים',
      description: 'מסיבות סוף שנה , תוכניות , מחנות וארועים.',
      buttonText: 'לפרטים נוספים'
    }
  ];

  const handleClickOpen = (serviceTitle) => {
    setSelectedService(serviceTitle); // שמירת שם השירות שנבחר
    setOpen(true); // פתיחת הדיאלוג
  };

  const handleClose = () => {
    setOpen(false); // סגירת הדיאלוג
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt={image.title} className="image" />
          <div className="text">
            <h1>{image.title}</h1>
            <p>{image.description}</p>
            <Button onClick={() => handleClickOpen(image.title)}>
              {image.buttonText}
            </Button>
          </div>
        </div>
      ))}

      {/* דיאלוג לקביעת תור */}
      <BookingDialog
        open={open}
        onClose={handleClose}
        selectedService={selectedService}
      />
    </div>
  );
};

export default ServicesPage;
