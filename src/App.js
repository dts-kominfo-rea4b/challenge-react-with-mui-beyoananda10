// import { Container, Grid, Box } from '@mui/system';
import './App.css';
import { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import Header from './components/Header'
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import contactsJSON from './data/contacts.json'




// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" sx={{ marginY: "3rem" }}>
        <Box >
          <Grid container spacing={8}>
            <Grid xs={6} sx={{ padding: "40px" }}>
              <ContactForm addContact={addContact} />
            </Grid>
            <Grid xs={6} sx={{ padding: "40px" }}>
              {contacts.map((contact, i) => {
                return <Contact key={i} data={contact} />
              })}
            </Grid>

          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default App;
