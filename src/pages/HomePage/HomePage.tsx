import { useEffect } from 'react';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchComments, fetchPosts } from '../../redux/thunks';

export const HomePage = () => {
  const { posts, isLoading, resultsPerPage, currentPage } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  useEffect(() => {
    dispatch(fetchPosts({ resultsPerPage, currentPage }));
  }, [resultsPerPage, currentPage]);

  return <>{isLoading ? <p>...Loading </p> : <Posts posts={posts} />}</>;
};

export default HomePage;
