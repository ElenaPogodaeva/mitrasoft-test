import { ListGroup } from 'react-bootstrap';
import { Comment } from '../Comment/Comment';
import { useAppSelector } from '../../hooks/hooks';

type CommentsProps = {
  postId: number;
};

export const Comments = ({ postId }: CommentsProps) => {
  const { comments } = useAppSelector((state) => state.comment);

  const filteredComments = comments.filter((comment) => comment.postId === postId);

  return (
    <ListGroup className="list-group-flush">
      {Boolean(comments.length) &&
        filteredComments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </ListGroup>
  );
};

export default Comments;
