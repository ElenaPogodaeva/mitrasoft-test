import { useEffect } from 'react';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchComments, fetchPosts } from '../../redux/thunks';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';

export const HomePage = () => {
  const { posts, isLoading, searchValue, resultsPerPage, currentPage, sortOrder } = useAppSelector(
    (state) => state.post
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  useEffect(() => {
    dispatch(fetchPosts({ searchValue, resultsPerPage, currentPage, sortOrder }));
  }, [resultsPerPage, currentPage, sortOrder]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-end mb-2 mt-2">
        <Search />
        <Sort />
      </div>
      {isLoading ? <p>...Loading </p> : <Posts posts={posts} />}
    </>
  );
};

export default HomePage;
