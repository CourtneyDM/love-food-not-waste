import React from 'react';
import { Button } from '../components/Form';

const HomePageContent = () => (
    <React.Fragment>
        <h1>Waste Not</h1>

        <Button
            className='btn btn-primary login'
            text='Login' />
        <Button
            className='btn btn-success'
            text='Sign Up' />
    </React.Fragment>
);

export default HomePageContent;