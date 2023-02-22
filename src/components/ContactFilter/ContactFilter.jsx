//import propTypes from 'prop-types';
import {FiltrLabel, FiltrInput} from './ContactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filter/filterActions';
import { getFilter } from '../../redux/filter/filterSelectors';

export const ContactFilter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({target}) => {
    dispatch(filterContact(target.value))
}

  return (
    <div>
      <FiltrLabel htmlFor="filter">Find contacts by name</FiltrLabel>
      <div>
        <FiltrInput type="text" name="filter" value={filter} onChange={onSetFilter} />
      </div>
    </div>
  );
};

