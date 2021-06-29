import React from 'react';
import Card from "./card.component";
import Button from "./button.component";
import "./error-modal.styles.css";

const ErrorModal = ({title, text, onSubmit}) => {
    return (
        <div className="backdrop">
            <Card>
                <header className="header">
                    <h2>{title}</h2>
                </header>
                <div className="content">
                    <p>{text}</p>
                </div>
                <footer className="actions">
                    <Button onClick={onSubmit}>OK</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;