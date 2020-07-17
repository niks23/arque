import React from 'react';
import Link from 'next/link';
import searchContainer from '../containers/searchContainer';
import Search from '../components/searchContainer';

const errorPage = () => {
    return (
        <div>
            <h1>Something went wrong.</h1>
            <p>try <Link href="/"><a>Going Back</a></Link>,</p>          
        </div>
    )
}

export default errorPage;

