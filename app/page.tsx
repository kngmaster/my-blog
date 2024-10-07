import PostCard from '@/components/post_card';
import HomeImage from '@/public/images/sample-1.jpeg'

export default function Home() {
  return (
   <>
    <div>Home Page</div>     
    <PostCard imgData={HomeImage} imgAlt="sample-1" imgTitle="sample-1" h2Title="sample title" pText="this isa description" hrefLink="/about" textLink="about"/>
   </>
  );
}
