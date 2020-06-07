import React, { useState, useEffect }from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountrySelector.module.css';

export default function CountrySelector({ handleCountryChnage }) {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChnage(e.target.value)}>
                <option value=''>Global</option>
    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
