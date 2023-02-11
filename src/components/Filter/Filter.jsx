import PropTypes from 'prop-types';
import { Input } from '../Input.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name <br />
      <Input
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
