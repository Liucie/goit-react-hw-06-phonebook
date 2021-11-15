import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

 function Contacts({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button
            onClick={() => onDelete(id)}
            type="button"
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacts, filter) => {

  const normalizedFilter = filter.toLowerCase();
 console.log(contacts);
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = (  { items, filter }  )  => ({
 
contacts: getVisibleContacts(items, filter),
  // const visibleContacts = getVisibleContacts(contacts,filter);

  // return {
  //   contacts: visibleContacts,
  // }
});

const mapDispatchToProps = dispatch =>({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Contacts);