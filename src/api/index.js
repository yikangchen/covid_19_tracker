import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


//fetch data for global and selected country
export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        
        const modifiedData = {
            confirmed,
            deaths, 
            recovered,
            lastUpdate
        }

        return modifiedData;

    } catch (error) {
        
    }
}

//fetch daily data for graph
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData;
    } catch (error) {
        
    }
}

//fetch country names for drop down
export const fetchCountries = async () => {
    try {
        const { data: {countries} } = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name);
    } catch (error) {
        
    }
}

export const fetchTop10 = async () => {
    try {
        const { data: { Countries } } = await axios.get('https://api.covid19api.com/summary');
        return Countries.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed) ? -1 : 1).slice(0,10);
    } catch (error) {
        
    }
}