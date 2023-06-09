import React, { useState, useEffect } from 'react'
import { Card } from "semantic-ui-react";

export default function OpportunityCard({ volCards }) {

    return (
        <div>
            <div className='header'>
                <p>{volCards.name}</p>
            </div>
            <div className='image'>
                <img width='200' height='200' src={volCards.image} />
            </div>
        </div>
    )
}
