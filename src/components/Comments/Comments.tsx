import { ListGroup } from 'react-bootstrap';
import { Comment } from '../Comment/Comment';
import { IComment } from '../../types/types';

type CommentsProps = {
  comments: IComment[];
};

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <ListGroup className="list-group-flush">
      {Boolean(comments.length) &&
        comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </ListGroup>
  );
};

export default Comments;
