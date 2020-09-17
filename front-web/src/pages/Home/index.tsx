import React from 'react';
import {ReactComponent as Arrow} from '../../assets/arrow.svg';
import {ReactComponent as Gamer} from '../../assets/gamer.svg';

import './styles.css';

const Home = () => (
    <div className="home-container">z
        <div className="home-text">
            <h1 className="home-text-title">Quais os jogos que o pessoal mais gosta?</h1>
            <h3 className="home-text-subtitle">Clique no botão abaixo e saiba quais são os jogos que os <em>gamers</em> estão a escolher!</h3>
            <div className="home-actions">
                <button className="home-btn">
                    Quero saber quais são
                </button>
                <div className="home-btn-icon">
                    <Arrow />
                </div>
            </div>
        </div>
        <Gamer className="home-imgage"/>
    </div>
);

export default Home;

