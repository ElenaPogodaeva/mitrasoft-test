import { Button, Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentPage, setSearchValue } from '../../redux/reducers/postSlice';
import { fetchPosts } from '../../redux/thunks';

export const Search = () => {
  const { searchValue, resultsPerPage, currentPage } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    dispatch(setSearchValue(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(fetchPosts({ searchValue, resultsPerPage, currentPage }));
    dispatch(setCurrentPage(1));
  };

  return (
    <Form className="d-flex w-50" onSubmit={handleSubmit}>
      <InputGroup className="search-input-group">
        <Form.Control
          type="search"
          placeholder="Название поста"
          aria-label="Search"
          className="me-2"
          size="sm"
          value={searchValue}
          onChange={handleChange}
        />
      </InputGroup>
      <Button type="submit" variant="outline-success" size="sm">
        Найти
      </Button>
    </Form>
  );
};

export default Search;
