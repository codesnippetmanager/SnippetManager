import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Box,
  Typography,
} from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';

function NewSnippetDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Code Snippet
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Code Snippet</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <CodeEditor 
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 20,
              width: '600px',
              height: '300px',
              backgroundColor: '#f5f5f5',
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}/>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewSnippetDialog;