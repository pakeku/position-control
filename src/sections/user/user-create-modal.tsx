import { useState } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

export function NewUserButton() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Replace with your user creation logic
    console.log('New User:', form);
    setOpen(false);
    setForm({ name: '', company: '', role: '' });
  };

  return (
    <>
      <Button
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon="mingcute:add-line" />}
        onClick={() => setOpen(true)}
      >
        New user
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Create New User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="Name" name="name" fullWidth value={form.name} onChange={handleChange} />
            <TextField label="Company" name="company" fullWidth value={form.company} onChange={handleChange} />
            <TextField label="Role" name="role" fullWidth value={form.role} onChange={handleChange} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
