import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import UserCard from '../../components/UserCard/UserCard';
import { fetchUserPosts } from '../../redux/reducers/postSlice';
import { fetchUser } from '../../redux/reducers/userSlice';

export const UserPage = () => {
  const { user } = useAppSelector((state) => state.user);
  const { posts, isLoading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  const userId = Number(useParams().userId);

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
    dispatch(fetchUser(userId));
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
