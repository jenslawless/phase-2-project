import React, { useState, useEffect } from 'react'
import OpportunityCard from './OpportunityCard'
import { Card, Container } from "semantic-ui-react";
import { Link } from "react-router-dom"


export default function HomePage({ volCards }) {
    const renderOpps = volCards.map((opp) => (
        <Card key={opp.id} itemsPerRow={6} className='ui card'>
            <Link to={`/homepage/${opp.id}`}>
                <OpportunityCard key={opp.id} volCards={opp} />
            </Link>
        </Card>
    ))

    return (
        <Card.Group itemsPerRow={4}>{renderOpps}</Card.Group>
    )
}
