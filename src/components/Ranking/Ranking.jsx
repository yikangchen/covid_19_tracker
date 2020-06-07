import React, { useState, useEffect } from 'react'
import { fetchTop10 } from '../../api'; 

import styles from './Ranking.module.css';


export default function Ranking({ top10 } ) {
    const [fetchedTop10, setFetchedTop10] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedTop10(await fetchTop10());
        }

        fetchAPI();
    }, [setFetchedTop10])

    return (
        <div className={styles.container}> 
        <p>Top 10 Countries by Number of Confirmed Cases</p>
        <table>
            <thead>
            <tr>
                <th>Country</th>
                <th>Number of Confirmed Cases</th>
            </tr>
            </thead>
            <tbody>
            
            {fetchedTop10.map((item, i) => 
            <tr key = {i}>
                <td>{item.Country}</td>
                <td>{item.TotalConfirmed.toLocaleString()}</td>
            </tr>)}
            </tbody>

        </table>
        </div>
    )
}
