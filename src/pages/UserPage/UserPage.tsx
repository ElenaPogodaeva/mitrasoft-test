import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUser, fetchUserPosts } from '../../redux/thunks';
import { useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import UserCard from '../../components/UserCard/UserCard';

export const UserPage = () => {
  const { user } = useAppSelector((state) => state.user);
  const { posts, isLoading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  const userId = useParams().userId || '';

  useEffect(() => {
    dispatch(fetchUserPosts(userId as string));
    dispatch(fetchUser(userId as string));
  }, []);

  return (
    <>
      {isLoading ? (
        <p>...Loading </p>
      ) : (
        <>
          <UserCard user={user}></UserCard>
          <h4 className="text-center">Список постов</h4>
          <Posts posts={posts} />
        </>
      )}
    </>
  );
};

export default UserPage;
