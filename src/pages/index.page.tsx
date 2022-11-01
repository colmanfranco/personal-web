import useStoryContent from '../hooks/useStoryContent';
import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
        <Container>
          <Stack direction='row' spacing={5}>
          <img src='/static/white-logo.svg' alt='Personal logo' height="400"/>
          <Box>
            <button onClick={typeWriter}>Click me</button>
            <h1 id='demo' />
          </Box>
          </Stack>
        </Container>
  )
}

export default Home
