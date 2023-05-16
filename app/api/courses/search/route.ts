import { NextResponse } from 'next/server';
import courses from '../data.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request:NextApiRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}