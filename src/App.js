import './App.css';
import  ContactForm  from './components/Form/ContactForm';
import Filter  from './components/Filter/Filter';
import  Contacts  from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <Contacts/>
    </div>
  );
}

export default App;
