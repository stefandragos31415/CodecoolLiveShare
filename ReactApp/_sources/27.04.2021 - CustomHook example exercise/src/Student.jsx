import React from 'react'
import useAnnualTax from './useAnnualTax';

export default function Student(props) {
    const annualTax = useAnnualTax(props.data);

    return (
        <li style={{color: annualTax ? 'green' : 'red'}}>
            <b>ID:</b>
            {props.data.id} <b>First_name:</b> {props.data.first_name} <b>Last_name:</b>
            {props.data.last_name} <b>Email:</b>
            {props.data.email}
        </li>
    )
}