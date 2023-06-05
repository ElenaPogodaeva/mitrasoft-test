import { Card, Image } from 'react-bootstrap';
import { IUser } from '../../types/types';
import './UserCard.scss';
import avatar from '../../assets/avatar.jpg';

type UserCardProps = {
  user: IUser | null;
};

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card style={{ width: '18rem' }} className="user-card">
      <Card.Body>
        <Card.Title className="user-title">
          <Image src={avatar} roundedCircle width={40} height={60} />
          {user?.name}
        </Card.Title>
        <Card.Text>
          <span className="fst-italic text-muted">email: </span>
          {user?.email}
        </Card.Text>
        <Card.Text>
          <span className="fst-italic text-muted">city: </span>
          {user?.address.city}
        </Card.Text>
        <Card.Text>
          <span className="fst-italic text-muted">phone: </span>
          {user?.phone}
        </Card.Text>
        <Card.Text>
          <span className="fst-italic text-muted">website: </span>
          {user?.website}
        </Card.Text>
        <Card.Text>
          <span className="fst-italic text-muted">company: </span>
          {user?.company.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
