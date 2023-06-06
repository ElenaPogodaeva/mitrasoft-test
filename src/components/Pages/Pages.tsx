import { Pagination } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentPage } from '../../redux/reducers/postSlice';

export const Pages = () => {
  const { totalPages, currentPage } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  const handlePageClick = (e: React.MouseEvent) => {
    const pageNumber = Number((e.target as HTMLElement).id);
    dispatch(setCurrentPage(pageNumber));
  };

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        id={number.toString()}
        active={number === currentPage}
        onClick={handlePageClick}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination className="justify-content-center flex-wrap">{items}</Pagination>;
};

export default Pages;
