import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import './customers-page.css';

import { Autoplay, Pagination } from 'swiper/modules';

const ClientsSlider = () => {
    const logos = [
        { src: "/images/image (21).png", alt: "שצרנסקי" },
        { src: "/images/כהנמן.png", alt: "כהנמן" },
        { src: "/images/בני ברק.png", alt: "בני ברק" },
        { src: "/images/החברה הכלכלית.png", alt: "החברה הכלכלית" },
        { src: "/images/image (21).png", alt: "שצרנסקי" },
        { src: "/images/כהנמן.png", alt: "כהנמן" },
        { src: "/images/החברה הכלכלית.png", alt: "החברה הכלכלית" },
        { src: "/images/image (21).png", alt: "שצרנסקי" },
        { src: "/images/החברה הכלכלית.png", alt: "החברה הכלכלית" },
        { src: "/images/בני ברק.png", alt: "בני ברק" },
        { src: "/images/כהנמן.png", alt: "כהנמן" },
        // הוספת לוגואים נוספים
    ];

    const testimonials = [
        { text: "וואוו יעל !!! יצא פשוט מושלם !!! בדיוק מה שרציתי וחלמתי...", name: "תמר שושתרי", imageSrc: "/images/תמר שושתרי.png", date: "17/06/2024" },
        { text: "איזה יפה הג'ינגל !!! קצר וקולע !!!!! את שרה ממש יפה, גם המיקס מושלם!!! תצליחי!", name: "חוי רוזמן", imageSrc: "/images/חוי רוזמן.png", date: "08/09/2023" },
        { text: "יעל שלום ובוקר טוב, קיבלנו את השיר איזה כיף להתחיל ככה את הבוקר נשמע מעולה!!!!!!!!!!! שמחנו להכיר היה לנו חויה מקסימה יחד ", name: "לאה קיבל", imageSrc: "/images/לאה קיבל.png", date: "08/01/2024" },
        { text: "תודה ענקית. מעבר לשיר והכל את פשוט מדהימה , כיף להיות לידך כל כך רגועה ונעימה. וכמה סבלנות שיש לך בלי עיין הרע ...  אז באמת תודה !!", name: "מיכל אליעד", imageSrc: "/images/מיכל אליעד.png", date: "20/05/2024" },
        { text: "היי ממש תודה על השיר!! הוא יצא יפה בטירוףף. אין עליך , נהנים מכל רגע תודה לך 😍😍", name: "ציפי שטיגליץ", imageSrc: "/images/ציפי שטיגליץ.png", date: "01/12/2023" }
    ];

    return (
        <div className="customers-page">
            <h1>לקוחות מספרים</h1>
            <div className="testimonials-section">

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    speed={2000}
                    pagination={{ clickable: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="testimonial-slide">
                            <div className="testimonial-box">
                                <div className='testimonial-content'>
                                    <div className="text-profil">
                                        <strong>{testimonial.name}</strong>
                                        <br />
                                        <span className="testimonial-date">{testimonial.date}</span>
                                    </div>
                                    <img src={testimonial.imageSrc} alt={`${testimonial.name} profile`} className="profile-image" />
                                </div>
                                <div className="stars-rating">
                                    <StarIcon className="star-filled" />
                                    <StarIcon className="star-filled" />
                                    <StarIcon className="star-filled" />
                                    <StarIcon className="star-filled" />
                                    <StarIcon className="star-filled" />
                                </div>
                                <p>{testimonial.text}</p>
                                <FormatQuoteIcon className="icon-talk-start" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <h1>בין לקוחותינו ...</h1>
            <div className="clients-grid">
                {logos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo.src} alt={logo.alt} className="logo-image" loading="lazy" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ClientsSlider;
