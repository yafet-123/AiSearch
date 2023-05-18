'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input text-black'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='bg-white text-black hover:bg-blue-500 hover:text-white border-blue-500 rounded-lg p-3 ml-5' type='submit'>
        Search
      </button>
    </form>
  );
};
export default CourseSearch;