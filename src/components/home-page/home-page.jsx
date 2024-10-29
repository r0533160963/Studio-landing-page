import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HeadsetIcon from '@mui/icons-material/Headset';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import ContactPage from '../contact-page/contact-page';
import Services from '../services-page/services-page';
import ClientsSlider from '../customers-page/customers-page';
import { Divider } from '@mui/material';
import AboutPage from '../about-page/about-page';
import SingingTips from '../singing-tips/singing-tips';
import { useNavigate } from 'react-router-dom';
import './home-page.css';

export default function HomePage() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isCaptionVisible, setIsCaptionVisible] = React.useState(true);
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleScroll = () => {
        const imageContainer = document.querySelector('.image-container');
        const imageRect = imageContainer.getBoundingClientRect();

        if (imageRect.bottom < 375) {
            setIsCaptionVisible(false);
        } else {
            setIsCaptionVisible(true);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const hendelSendMail = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=R0533160963@gmail.com');
    }

    const handleLoginClick = () => {
        navigate('/login'); // הנתיב '/login' מייצג את כתובת דף הלוגין שלך
    };

    return (
        <div className="home-page">
            <AppBar position="fixed" className="app-bar">
                <Toolbar>
                    <div className="appBar-action">
                        <img src="/images/android-chrome-192x192.png" alt="logo" className="logo-image" onClick={() => scrollToSection('home-page')} />
                        <Button className="button-action" onClick={() => scrollToSection('about-section')}>
                            <AudiotrackIcon className="icon-action" /> אודות
                        </Button>
                        <Button className="button-action" onClick={() => scrollToSection('services-section')}>
                            <HeadsetIcon className="icon-action" /> מה באולפן
                        </Button>
                        <Button className="button-action" onClick={() => scrollToSection('singing-section')}><MicExternalOnIcon className="icon-action" /> רוצים לשיר</Button>
                        <Button className="button-action" onClick={() => scrollToSection('customer-section')}><CheckCircleOutlineIcon className="icon-action" /> מרוצים וממליצים</Button>
                        <Button className="button-action" onClick={() => scrollToSection('contact-section')}>
                            <WhatsAppIcon className="icon-action" /> צור קשר
                        </Button>
                    </div>
                    {auth && (
                        <div>
                            <IconButton
                                onClick={handleMenu}
                                color="inherit"
                                className="icon-count"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleLoginClick}>login</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>

            <div className="image-container" id="home-page">
                <img src="/images/spicker-2.jpg" alt="A beautiful view" className="image-class" />
                {isCaptionVisible && (
                    <h1 className="image-caption">בואו לחוות את השירה באמת</h1>
                )}
            </div>
            <div id="about-section">
                <AboutPage />
            </div>
            <div id="services-section">
                <Services />
            </div>
            <div id='singing-section'>
                <SingingTips />
            </div>
            <div id="customer-section">
                <ClientsSlider />
            </div>

            <Divider className='divider' />
            <div className="heder-end" id="contact-section">
                <img src="/images/logo_yael-removebg-preview.png" className="logo-image-end" />
                <ContactPage />
            </div>
            <Divider className='divider' />
            <div className='text-creat'>
                <p>Developed by: Rachel Wiesel</p>
                <p onClick={hendelSendMail} className="dress-mail">R0533160963@gmail.com</p>
            </div>

        </div>
    );
}