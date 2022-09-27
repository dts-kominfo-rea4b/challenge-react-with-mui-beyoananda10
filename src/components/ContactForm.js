// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Box, TextField, Stack, Divider, Button } from '@mui/material';
import { useState } from 'react';
const ContactForm = ({ addContact }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");

    const tambahContact = () => {
        const newContact = { name, phone, email, photo }
        addContact(newContact);
    };

    return (
        <>
            <Box sx={{ bgcolor: 'background.paper', padding: '10px' }}>
                <Divider sx={{ margin: '20px' }}> Form Input </Divider>

                <Stack spacing={2} >
                    <TextField
                        name="name"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        name="phone"
                        label="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <TextField
                        name="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        name="photo"
                        label="Photo URL"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                    <Button color="success"
                        onClick={tambahContact}
                    >Add</Button>
                </Stack>

            </Box>
        </>
    );
}

export default ContactForm;