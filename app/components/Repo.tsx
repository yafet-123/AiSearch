import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepo(name:string) {
  const response = await fetch(
    `https://api.github.com/repos/yafet-123/${name}`,
    {
      next: {
        revalidate: 60, // wait to 60 second and revalidate or fech again this is good for data that are changing to often
      },
    }
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2 className="text-5xl font-bold">{repo.name}</h2>
      <p className="text-lg">{repo.description}</p>
      <div className='card-stats w-full'>
        <div className='card-stat'>
          <FaStar />
          <span className="font-bold text-xl text-blue-500">{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span className="font-bold text-xl text-blue-500">{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span className="font-bold text-xl text-blue-500">{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};
export default Repo;