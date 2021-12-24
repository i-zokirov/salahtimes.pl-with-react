import React from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

const HomeScreen = () => {

    return(
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
                    <td></td>
                </tr>

                <tr>
                    <td>Sunrise </td>
                    <td></td>
                </tr>

                <tr>
                    <td>Dhuhr </td>
                    <td></td>
                </tr>

                <tr>
                    <td>Asr </td>
                    <td></td>
                </tr>

                <tr>
                    <td>Maghrib </td>
                    <td></td>
                </tr>

                <tr>
                    <td>Isha </td>
                    <td></td>
                </tr>
            </tbody>
    </Table>
    )
}

export default HomeScreen