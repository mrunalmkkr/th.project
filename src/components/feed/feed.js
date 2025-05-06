import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './postcard';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error('Feed error:', err));
  }, []);

  const handleSave = (post) => console.log('Saved', post.id);
  const handleShare = (post) => navigator.share?.({ title: post.title, url: post.url });
  const handleReport = (post) => axios.post(`/api/report`, { postId: post.id });

  return (
    <div className="p-4">
      {Array.isArray(posts) && posts.map((post) => (
        <PostCard key={post.id} post={post} onSave={handleSave} onShare={handleShare} onReport={handleReport} />
      ))}
    </div>
  );
};

export default Feed;
