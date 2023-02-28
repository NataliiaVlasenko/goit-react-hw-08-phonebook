import { FiltrLabel, FiltrInput } from './ContactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-slice';
//import { getFilter } from '../../redux/filter/filterSelectors';

export const ContactFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(getFilter(target.value));
  };

  return (
    <div>
      <FiltrLabel htmlFor="filter">Find contacts by name</FiltrLabel>
      <div>
        <FiltrInput
          type="text"
          name="filter"
          value={filter}
          onChange={onSetFilter}
        />
      </div>
    </div>
  );
};
