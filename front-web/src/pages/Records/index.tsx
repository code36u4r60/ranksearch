import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Filters from '../../components/Filters';
import { formatDate } from './helpers';
import Pagination from './Pagination';

import './styles.css';

import { RecordsResponse } from './types';

const BASE_URL = 'https://rank-games.herokuapp.com';

const Records = () => {

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        Axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then(response => setRecordsResponse(response.data))
    }, [activePage]);

    const handlePageChange = (index: number) => {
        setActivePage(index)
    }

    return (
        <div className="page-container">

            <Filters link="/charts" linkText="Ver Gráficos" />
            
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Instante</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Plataforma</th>
                        <th>Gênero</th>
                        <th>Título Jogo</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <Pagination
                activePage={activePage}
                totalPages={recordsResponse?.totalPages}
                goToPage={handlePageChange}
            />

        </div>
    );

}

export default Records;