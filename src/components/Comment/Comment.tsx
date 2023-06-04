import { ListGroup } from 'react-bootstrap';
import { IComment } from '../../types/types';

type CommentProps = {
  comment: IComment;
};

export const Comment = ({ comment }: CommentProps) => {
  const { email, body } = comment;

  return (
    <ListGroup.Item className="p-0 pt-3">
      <p className="text-muted mb-2">{email}</p>
      <p>{body}</p>
    </ListGroup.Item>
  );
};

export default Comment;
