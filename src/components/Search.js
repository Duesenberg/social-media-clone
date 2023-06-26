import React from 'react';
import '../styles/Search.css';
import SearchResults from './SearchResults';

export default function Search () {
  return (
    <div className='search-container'>
      <div className='sub-container'>
        <input type='text' name='profile-search' placeholder='Search' />
        <SearchResults />
      </div>
    </div>
  )
}