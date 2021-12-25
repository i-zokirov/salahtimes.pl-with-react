import React, {useEffect} from 'react';
import { Table,  Container } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import Loader from "../components/Loader"
import Message from '../components/Message';
import SearchBar from '../components/SearchBar';
import { getPrayerTimesByCity } from '../actions/PrayerTimesActions';


const HomeScreen = () => {

    const dispatch = useDispatch()
    const prayerTimes = useSelector(state => state.prayerTimes)
    const { loading, timings, error, date, meta, success, city, country } = prayerTimes

    const currentCity = useSelector(state => state.currentCity)
    const {current_city} = currentCity
    useEffect(() => {
        dispatch(getPrayerTimesByCity(current_city))
    }, [dispatch, current_city])

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

     
    return (
        <React.Fragment>
            <SearchBar/>
            {loading ? <Loader/> : error && <Message>{error}</Message>}
            {success && (     
                <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Prayer</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fajr </td>
                            <td>{timings.Fajr}</td>
                        </tr>

                        <tr>
                            <td>Sunrise </td>
                            <td>{timings.Sunrise}</td>
                        </tr>

                        <tr>
                            <td>Dhuhr </td>
                            <td>{timings.Dhuhr}</td>
                        </tr>

                        <tr>
                            <td>Asr </td>
                            <td>{timings.Asr}</td>
                        </tr>

                        <tr>
                            <td>Maghrib </td>
                            <td>{timings.Maghrib}</td>
                        </tr>

                        <tr>
                            <td>Isha </td>
                            <td>{timings.Isha}</td>
                        </tr>
                    </tbody>
            </Table>
            <div className='text-center'>
                <h3>{date.readable}</h3>
                <h4>{date.hijri.day} {date.hijri.month.en} {date.hijri.year}</h4>
                <hr/>
                <h2>{capitalizeFirstLetter(city)}, {capitalizeFirstLetter(country)}</h2>
                <p>Timezone: {meta.timezone}</p>
            </div>
            </Container>

        )} 
        </React.Fragment>
    )
    
     
    
    
}

export default HomeScreen