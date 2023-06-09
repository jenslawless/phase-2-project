import React from 'react'
import { Card, Container } from "semantic-ui-react";

export default function Organizations({ orgs }) {
    const renderOpps = orgs.map((org) => (
        <>
            <Card class="ui card">
                <div class="image">
                    <img height="200" width="200" src={org.image} />
                </div>
                <div class="content">
                    <a class="header">{org.name}</a>
                    <div class="description">
                        {org.mission}
                    </div>
                </div>
                <div class="extra content">
                    <a>
                        {org.type}
                    </a>
                </div>
            </Card>
        </>
    ))

    return (
        <h1>
            <Card.Group className='container' itemsPerRow={2}>{renderOpps}</Card.Group>
        </h1 >
    )
}
