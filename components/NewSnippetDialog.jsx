import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Box,
  Typography,
} from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';

function NewSnippetDialog() {
  const [open, setOpen] = React.useState(false);
  const [code, setCode] = React.useState('');
  const [title, setTitle] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title: ', title);
    console.log('Code: ', code);
    fetch('http://localhost:3000/api/snippet/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'jasonkuyper1', title, code }),
    }).then((res) => res.json())
      .then((data) => {
        console.log('THIS IS FROM THE RESPONSE', data);
      })
      .catch((err) => {
        console.log(`there was an error sending LOGIN DATA, error: ${err}`);
      });
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
      >
      <Button
        variant="outlined"
        onClick={handleClickOpen}
      >
        New Code Snippet
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Code Snippet</DialogTitle>
        <DialogContent>
          <Box
            componenet="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={(evn) => setTitle(evn.target.value)}

            />
            <CodeEditor
              language="js"
              placeholder="Please enter code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                fontSize: 12,
                width: '600px',
                height: '300px',
                backgroundColor: '#f5f5f5',
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}
            />
          </Box>
        </DialogContent>
          <Box
            componenet="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={(evn) => setTitle(evn.target.value)}

            />
            <CodeEditor
              language="js"
              placeholder="Please enter code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                fontSize: 12,
                width: '600px',
                height: '300px',
                backgroundColor: '#f5f5f5',
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewSnippetDialog;
