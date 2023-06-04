import { Button, Card, Col } from 'react-bootstrap';
import { IPost } from '../../types/types';
import Comments from '../Comments/Comments';
import './Post.scss';

const comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: `laudantium enim quasi est quidem magnam voluptate ipsam eos
tempora quo necessitatibus
dolor quam autem quasi
reiciendis et nam sapiente accusantium`,
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: `est natus enim nihil est dolore omnis voluptatem numquam
et omnis occaecati quod ullam at
voluptatem error expedita pariatur
nihil sint nostrum voluptatem reiciendis et`,
  },
  {
    postId: 1,
    id: 3,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: `est natus enim nihil est dolore omnis voluptatem numquam
et omnis occaecati quod ullam at
voluptatem error expedita pariatur
nihil sint nostrum voluptatem reiciendis et`,
  },
  {
    postId: 1,
    id: 4,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: `est natus enim nihil est dolore omnis voluptatem numquam
et omnis occaecati quod ullam at
voluptatem error expedita pariatur
nihil sint nostrum voluptatem reiciendis et`,
  },
  {
    postId: 1,
    id: 5,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: `est natus enim nihil est dolore omnis voluptatem numquam
et omnis occaecati quod ullam at
voluptatem error expedita pariatur
nihil sint nostrum voluptatem reiciendis et`,
  },
];

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
          <Comments comments={comments} />
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
