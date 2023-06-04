import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { IPost } from '../../types/types';
import Comments from '../Comments/Comments';
import './Post.scss';

type PostProps = {
  post: IPost;
  handleClick: (id: string) => void;
};

export const Post = ({ post, handleClick }: PostProps) => {
  const { id, title, body } = post;

  return (
    <Col>
      <Card>
        <Card.Body className="card">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-text">{body}</Card.Text>
          {/* <Card.Img src={logo} style={{ width: 100 }} /> */}
          {/* <Button variant="primary">Comments</Button> */}
          {/* <Comments comments={comments} /> */}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">Комментарии</Button>
          {/* <Comments comments={comments} /> */}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
