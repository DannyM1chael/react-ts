import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reprehenderit, repellat reiciendis! 
                Eum ullam quibusdam doloribus adipisci velit consequatur a eaque.
            </p>
            <button className="btn" onClick={() => history.push('/')}>К списку дел</button>
        </React.Fragment>
    )
}