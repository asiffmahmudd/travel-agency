import React from 'react';
import { useParams } from 'react-router';

const NotFound = () => {
    let {id} = useParams();
    console.log(id)
    return (
        <div>
            <h1 className="text-warning text-center">Page Not Found</h1>
        </div>
    );
};

export default NotFound;