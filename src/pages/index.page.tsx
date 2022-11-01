import useStoryContent from '../hooks/useStoryContent';
import { NextPage } from 'next';
import Container from '@mui/material/Container';

type HomeProps = { title: string }

const Home: NextPage = () => {
  const content = useStoryContent<HomeProps>('home');
  if (!content) {
    return <div>Loading...</div>;
  }

  const { title } = content;

  let i = 0
  function typeWriter(): void {
    const titleNode: HTMLElement | null = document.getElementById("demo");
    if (!titleNode) return;
    if (i < title.length) {
      titleNode.innerHTML += title.charAt(i);
      setTimeout(typeWriter, 50);
      i++;
    }
  }

  return (
      <main style={{backgroundColor: '#0a192f'}}>
        <Container maxWidth="sm" >
          <button onClick={typeWriter}>Click me</button>
          <h1 id='demo' />
        </Container>
      </main>
  )
}

export default Home
