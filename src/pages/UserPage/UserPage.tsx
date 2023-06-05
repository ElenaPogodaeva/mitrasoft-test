import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUser } from '../../redux/thunks';
import { useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import UserCard from '../../components/UserCard/UserCard';

export const UserPage = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { posts } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  const userId = useParams().userId || '';

  const filteredPosts = posts.filter((post) => post.userId === +userId);

  useEffect(() => {
    dispatch(fetchUser(userId as string));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p>...Loading </p>
      ) : (
        <>
          <UserCard user={user}></UserCard>
          <h4 className="text-center ">Список постов</h4>
          <Posts posts={filteredPosts} />
        </>
      )}
    </>
  );
};

export default UserPage;
