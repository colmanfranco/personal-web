import styles from '../styles/Home.module.css';
import useStoryContent from '../hooks';

const Home = () => {
  const content = useStoryContent('/');
  if (!content) {
    return <div>Loading...</div>;
  }
  console.log(content)

  return (
    <div className={styles.container}>
      <main>
        <h1>
          Franco website
        </h1>
      </main>
    </div>
  )
}

export default Home

