import { useDispatch, useSelector } from 'react-redux';
import { FilterWrap, LabelFilter, InputFilter } from './Filter.styled';
import { filterContact } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter);

  const onChangeInput = e => dispatch(filterContact(e.target.value));

  return (
    <FilterWrap>
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          value={inputValue}
          onChange={onChangeInput}
        ></InputFilter>
      </LabelFilter>
    </FilterWrap>
  );
};
