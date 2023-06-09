import React, { useState, useEffect } from 'react'

import { Card, Container } from "semantic-ui-react";
import IndiPage from './IndiPage';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import { useMatch } from "react-router"

export default function HomePage({ volCards }) {
    const renderOpps = volCards.map((opp) => (
        <Card key={opp.id} className='ui card'>
            <Link to={`/homepage/${opp.id}`}>
                <div className='ui card'>
                    <div class="content">
                        <div class="header">Organization:  {opp.name}</div>
                    </div>
                    <div class="content" >
                        <div>
                            <div >

                                <p>
                                    <i class="users icon"></i>
                                    Volunteers needed: {opp.volunteers}
                                </p>
                                <p>Date: {opp.date} </p>
                                <p>Type of org: {opp.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link >
        </Card>
    ))

    return (
        <>
            <h1 className='oppHeader'>Find a volunteer opportunity: </h1 >
            <Card.Group itemsPerRow={5}>{renderOpps}</Card.Group>
        </>
    )
}
