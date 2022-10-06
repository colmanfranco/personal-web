import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getStoryblokApi, useStoryblokState } from "@storyblok/react";

const Home = () => {
  // const story = useStoryblokState(props.initialStory);
  // if (!story.content) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className={styles.container}>
      <main>
        <h1>
          Franco website
        </h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home

// export async function getStaticProps({ preview = false }) {
//   const slug = "home";
//   const sbParams = {
//     version: "draft", // or 'published'
//   };
 
//   const storyblokApi = getStoryblokApi();
//   const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//       preview,
//     },
//     revalidate: 3600,
//   };
// }
