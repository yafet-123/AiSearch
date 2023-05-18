import Link from 'next/link';

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // this is to show us the suspense boudary 

  const response = await fetch(
    `https://api.github.com/repos/yafet-123/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir'); // this give us the file and other thing but we want only the directory

  return (
    <>
      <h3 className="text-2xl font-bold hover:text-blue-500">Directories</h3>
      <ul className="list-disc">
        {dirs.map((dir) => (
          <li key={dir.path} className="text-blue-800 ml-20">
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default RepoDirs;