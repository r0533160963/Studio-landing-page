import React, { useState } from 'react';
import { Divider } from '@mui/material';
import RequestCard from '../request-card/request-card';
import './requests-page.css';

function RequestsPage() {
    const [requests, setRequests] = useState([
        { id: 1, name: 'John Doe', phone: '050-1234567', email: 'john@example.com', message: 'I need help with my account.', status: 'regular' },
        { id: 2, name: 'Jane Smith', phone: '050-7654321', email: 'jane@example.com', message: 'Please contact me regarding pricing.', status: 'regular' },
        { id: 3, name: 'Michael Brown', phone: '050-9876543', email: 'michael@example.com', message: 'I have an issue with my order.', status: 'regular' },
        { id: 4, name: 'John Doe', phone: '050-1234567', email: 'john@example.com', message: 'I need help with my account.', status: 'regular' },
        { id: 5, name: 'Jane Smith', phone: '050-7654321', email: 'jane@example.com', message: 'Please contact me regarding pricing.', status: 'regular' },
        { id: 6, name: 'Michael Brown', phone: '050-9876543', email: 'michael@example.com', message: 'I have an issue with my order.', status: 'regular' },
    ]);

    const handleMarkInProgress = (id) => {
        setRequests(requests.map(request =>
            request.id === id ? { ...request, status: 'in-progress' } : request
        ));
    };

    const handleMarkDone = (id) => {
        setRequests(requests.map(request =>
            request.id === id ? { ...request, status: 'done' } : request
        ));
    };

    const handleDelete = (id) => {
        setRequests(requests.filter(request => request.id !== id));
    };

    return (
        <div className="requests-page">
            <h2>הפניות שלי</h2>
            <div className="section">
                <h3>פניות חדשות</h3>
                <div className="requests-container">
                    {requests.filter(request => request.status === 'regular').map(request => (
                        <RequestCard
                            key={request.id}
                            request={request}
                            onDelete={handleDelete}
                            onMarkDone={handleMarkDone}
                            onMarkInProgress={handleMarkInProgress}
                        />
                    ))}
                </div>
            </div>

            <br />
            <Divider />

            <div className="section">
                <h3 className='leter'>יטופל בהמשך</h3>
                <div className="requests-container">
                    {requests.filter(request => request.status === 'in-progress').map(request => (
                        <RequestCard
                            key={request.id}
                            request={request}
                            onDelete={handleDelete}
                            onMarkDone={handleMarkDone}
                        />
                    ))}
                </div>
            </div>

            <br />
            <Divider />

            <div className="section">
                <h3 className='don'>טופל</h3>
                <div className="requests-container">
                    {requests.filter(request => request.status === 'done').map(request => (
                        <RequestCard
                            key={request.id}
                            request={request}
                            onDelete={handleDelete}
                            onMarkInProgress={handleMarkInProgress}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RequestsPage;
