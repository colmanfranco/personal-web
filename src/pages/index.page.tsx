import useStoryContent from '../hooks/useStoryContent';
import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {useEffect} from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Image from 'next/image';

type HomeProps = { title: string }

const Home: NextPage = () => {
    const content = useStoryContent<HomeProps>('home');
    useEffect(() => {
        typeWriter();
    })

    if (!content) {
        return (
            <Box sx={{ width: '90%', marginLeft: '5%'}}>
                <LinearProgress />
            </Box>
        );
    }

  const { title } = content;

  let i = 0

  function typeWriter(): void {
      const titleNode: HTMLElement | null = document.querySelector("#demo");
      if (!titleNode) return;
    if (i < title.length) {
      titleNode.innerHTML += title.charAt(i);
      setTimeout(typeWriter, 150);
      i++;
    }
  }

  console.log(title)
  return (
        <Container>
          <Stack direction='row' spacing={10} width='100%' justifyContent='flex-start' alignItems='center'>
              <Image src='/static/white-logo.svg' alt='Personal logo' height="350" width='200'/>
              <Typography variant='h2' width='75%' style={{whiteSpace: 'pre-wrap'}} >
                  {title}
              </Typography>
          </Stack>
        </Container>
  )
}

export default Home
