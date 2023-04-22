import useStoryContent from '../hooks/useStoryContent';
import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {useEffect} from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import { CircularProgress } from '@mui/material';

type HomeProps = { title: string }

const Home: NextPage = () => {
    const content = useStoryContent<HomeProps>('home');

    if (!content) {
        return (
            <Box sx={{ width: '90%', marginX: '5%', justifyContent: 'center'}}>
                <CircularProgress />
            </Box>
        );
    }

  const { title } = content;

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
