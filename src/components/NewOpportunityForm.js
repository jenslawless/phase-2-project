import React, { useState } from 'react'
import { Form } from "semantic-ui-react";

export default function NewOpportunityForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        description: "",
        image: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e) {
        const newOpp = {
            name: formData.name,
            type: formData.type,
            description: formData.description,
            image: formData.image
        };
        fetch("http://localhost:3001/nonprofits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOpp)
        })
            .then((r) => r.json())
            .then((newOpp) => {
                onSubmit(newOpp)
                setFormData({})
            })
    }

    return (
        <div>
            <h3>Add your opportunity...</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid label="Name of organization" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                    <Form.Input fluid label="type" placeholder="Type of cause" name="type" value={formData.type} onChange={handleChange} />
                    <Form.Input
                        fluid
                        label="Image"
                        placeholder="image here"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Description of the opportunity"
                        placeholder="description here"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div >
    );
}
