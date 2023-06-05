import { Button, Card, Col, Image } from 'react-bootstrap';
import { IPost } from '../../types/types';
import Comments from '../Comments/Comments';
import './Post.scss';
import { useState } from 'react';
import avatar from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';

type PostProps = {
  post: IPost;
  handleClick: (id: string) => void;
};

export const Post = ({ post, handleClick }: PostProps) => {
  const { id, title, body, userId } = post;
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const handleBtnClick = () => {
    setIsCommentOpen((prev) => !prev);
  };

  return (
    <Col>
      <Card>
        <Card.Body className="card">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-text">{body}</Card.Text>
          <Link to={`/users/${userId}`}>
            <Image src={avatar} roundedCircle width={50} height={75} />
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary" onClick={handleBtnClick}>
            Комментарии
          </Button>
          {isCommentOpen && <Comments postId={id} />}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
