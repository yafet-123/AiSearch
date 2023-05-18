import { NextResponse } from 'next/server';
import courses from '../data.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request:NextApiRequest) {
  const { searchParams } = new URL(request.url);
  // get the url and then from the url get the query or get the value after ?
  const query = searchParams.get('query');
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
    // change the database file in to lowercase and the query to lower case to match it
  });
  return NextResponse.json(filteredCourses);
}