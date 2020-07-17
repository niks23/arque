import React from 'react';
import Link from 'next/link';
import SearchContainer from '../containers/searchContainer';
// import Search from '../components/searchContainer';

const indexPage = () => {
    return (
        <div>
          <SearchContainer />
          {/* <Search /> */}
        </div>
    )
}

export default indexPage;

