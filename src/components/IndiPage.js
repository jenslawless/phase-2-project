import React from 'react'
import { useParams } from 'react-router-dom'

export default function IndiPage({ volCards }) {

    const params = useParams();
    const oppId = parseInt(params.oppId)
    const opportunity = volCards.find(opp => opp.id === oppId)

    if (!opportunity) {
        return <div>No opportunity found with ID {oppId}</div>;
    }
    return (
        <>
            <div className='indi'>
                <img height="400" width="400" src={opportunity.image} />
            </div>
            <h1>{opportunity.name}</h1>
            <h3>Volunteers needed: {opportunity.volunteers}</h3>
            <h3>Date of event: </h3>
            <h3>Description of event: </h3>
            <div className='indi'>{opportunity.description}</div>
            <h3><button>Sign Up</button> </h3>
        </>
    )
}
