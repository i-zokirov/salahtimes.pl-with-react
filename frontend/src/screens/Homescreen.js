import React, {useEffect, useState} from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import { useSelector, useDispatch } from 'react-redux';

import Loader from "../components/Loader"
import Message from '../components/Message';

import { getPrayerTimesByCity } from '../actions/PrayerTimesActions';


const HomeScreen = () => {

    const dispatch = useDispatch()
    const prayerTimes = useSelector(state => state.prayerTimes)
    const { loading, timings, error, date, meta, success } = prayerTimes

    useEffect(() => {
        dispatch(getPrayerTimesByCity('katowice'))
    }, [dispatch])

     
    return (
        <React.Fragment>
            {loading ? <Loader/> : error && <Message>{error}</Message>}
            {success && (     
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
        )} 
        </React.Fragment>
    )
    
     
    
    
}

export default HomeScreen