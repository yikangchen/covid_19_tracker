import React, { Component } from 'react'
import { Cards, Chart, CountrySelector, Ranking } from './components';
import styles from './App.module.css';
import { fetchData, fetchTop10 } from './api';

export default class App extends Component {
    state = {
        data: {},
        country: '',
        top10: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });

        const top10 = await fetchTop10();
        this.setState({ top10 });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data, country, top10 } = this.state;

        return (
            <div className={styles.container}>
                <div className="left">
                    <Cards data={this.state.data}/>
                    <CountrySelector handleCountryChnage={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                </div>
                <div className="right">
                    <Ranking ranking={top10}/>
                </div>
            </div>
        )
    }
}
