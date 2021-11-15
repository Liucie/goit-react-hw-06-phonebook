import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

 function Filter({ onChange, value }) {
   console.log(value);
  return (
    <div>
      <label className={s.label}>Find contacts by name</label>
      <input
        type="tel"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
        className={s.input}
      />
    </div>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};


const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
});
export default connect(mapStateToProps,mapDispatchToProps)(Filter)