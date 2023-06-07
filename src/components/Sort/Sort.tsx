import { Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSortOrder } from '../../redux/reducers/postSlice';
import { SortType } from '../../types/types';

export const Sort = () => {
  const { sortOrder } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    dispatch(setSortOrder(value));
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="col-form-label-sm mb-0">Сортировать по названию поста</Form.Label>
        <Form.Select size="sm" value={sortOrder} onChange={handleChange}>
          <option value={SortType.ASC}>По возрастанию</option>
          <option value={SortType.DESC}>По убыванию</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default Sort;
