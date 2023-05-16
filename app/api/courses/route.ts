import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request: NextApiRequest) {
  return NextResponse.json(courses);
}

export async function POST(request: NextApiRequest,) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
}