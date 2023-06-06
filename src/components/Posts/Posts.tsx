import { Post } from '../Post/Post';
import { IPost } from '../../types/types';
import { Row } from 'react-bootstrap';
import Pages from '../Pages/Pages';

type PostsProps = {
  posts: IPost[];
};

export const Posts = ({ posts }: PostsProps) => {
  const handleClick = (id: string) => {
    // navigate(`/posts/${id}`);
  };

  return (
    <>
      <Row xs={1} md={3} className="g-2 mt-2 mb-3">
        {Boolean(posts.length) &&
          posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />)}
      </Row>
      <Pages />
    </>
  );
};

export default Posts;
