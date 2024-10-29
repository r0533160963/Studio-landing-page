// RequestCard.jsx
import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './request-card.css';

function RequestCard({ request, onDelete, onMarkDone, onMarkInProgress }) {
    return (
        <div className={`request-card ${request.status}`}>
            <div className="request-header">{request.name}</div>
            <div className="request-info"><strong>טלפון:</strong> {request.phone}</div>
            <div className="request-info">
                <strong>מייל:</strong>
                <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${request.email}`}
                    className="email-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {request.email}
                </a>
            </div>
            <div className="request-message">{request.message}</div>
            <div className="request-actions">
                <IconButton onClick={() => onDelete(request.id)} >
                    <DeleteIcon />
                </IconButton>
                {(request.status === 'regular'||  request.status === 'done')&& (
                    <IconButton onClick={() => onMarkInProgress(request.id)} color="error">
                        <AccessTimeIcon />
                    </IconButton>
                )}
                {(request.status === 'regular' || request.status === 'in-progress') && (
                    <IconButton onClick={() => onMarkDone(request.id)} color="success">
                        <CheckIcon />
                    </IconButton>
                )}
            </div>
        </div>
    );
}

export default RequestCard;
