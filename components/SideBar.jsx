import React, { useState } from 'react';
import {
  Button, Typography, List, ListItem, ListItemText, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../styling/sidebar.css';
import { updateSnippetListActionCreator } from '../redux/actions';
import NewSnippetDialog from './NewSnippetDialog';

function SideBar() {
  // const codesnippets = useSelector(state => state.snippet.)
  const list = useSelector((state) => state.snippet.snippets);
  const dispatch = useDispatch();

  return (
    <div className="homepage">
      <div className="snippet-container">
        <div className="list-view">
          <NewSnippetDialog />
          <h3>Code Snippets</h3>
          <List component="nav">
            {list.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="editor">
          <div className="title">
            <h2>Snippet Title</h2>
          </div>
          <CodeEditor
            language="js"
            placeholder="Code Snippet"
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              width: '500%',
              height: '700px',
              margin: '5px',
              backgroundColor: '#f5f5f5',
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
