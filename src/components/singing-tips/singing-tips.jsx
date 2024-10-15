import React from 'react';
import  { useEffect, useRef } from 'react';
import './singing-tips.css';

const SingingTips = () => {

  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 } // 50% מהכותרת צריכה להיכנס למסך כדי להפעיל את האנימציה
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const tips = [
    {
      title:'חימום קולי -',
      text: ' התחל תמיד את השירה עם חימום קל של הקול כדי למנוע פציעות קוליות.',
      image: '/images/panagiotis-falcos-S65Y3yFMjOg-unsplash.jpg',
    },
    {
      title:'נשימה נכונה -',
      text: ' נשום עמוק דרך הסרעפת כדי לתמוך בקול שלך ולהימנע ממאמץ מיותר.',
      image: '/images/israel-palacio-Y20JJ_ddy9M-unsplash.jpg',
    },
    {
      title:'שמירה על לחות -',
      text: 'שתה מים בטמפרטורת החדר כדי לשמור על לחות מיתרי הקול שלך.',
      image: '/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg',
    },
    {
      title:'יציבה נכונה -',
      text: 'יציבה נכונה - עמוד ישר עם כתפיים רגועות כדי לאפשר נשימה חופשית וקול ברור יותר.',
      image: '/images/stefano-girardelli-2IWLUKvA064-unsplash.jpg',
    },
    {
      title:'שליטה בטונים -',
      text: 'תרגול סולמות מוזיקליים יעזור לך לשפר את היכולת שלך לעבור בין טונים בצורה חלקה.',
      image: '/images/fabian-kleiser-G-GYmjT2GpY-unsplash.jpg',
    },
  ];

  return (
    <div className='singing-tips'>
      <h2 ref={headingRef}> טיפים שיעזרו לך לשיר טוב יותר</h2>
      <div className='tip-list'>
        {tips.map((tip, index) => (
          <div key={index} className='tip-item'>
            <img src={tip.image} alt={`טיפ ${index + 1}`} className='tip-image' loading="lazy" />
            <h3>{tip.title}</h3>
            <p className='text-tip'>{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingingTips;
