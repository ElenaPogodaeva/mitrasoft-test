import { useEffect } from 'react';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchComments, fetchPosts } from '../../redux/thunks';

export const HomePage = () => {
  const { posts, isLoading } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, []);

  return <>{isLoading ? <p>...Loading </p> : <Posts posts={posts} />}</>;
};

export default HomePage;
