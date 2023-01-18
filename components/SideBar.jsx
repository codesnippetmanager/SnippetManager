import React, { useState } from 'react';
import {Button, Typography, List, ListItem, ListItemText, TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CodeEditor from '@uiw/react-textarea-code-editor';
import "../styling/sidebar.css";
import { updateSnippetListActionCreator } from '../redux/actions';

function SideBar() {

  // const codesnippets = useSelector(state => state.snippet.)   
  const list = useSelector(state => state.snippet.snippets);
  const dispatch = useDispatch();


  return (

    <div className="sidebar">
      {console.log(list, "THIS IS ISITT")}
      <div className='snippet-container'>
        <div className='list-view'> 
            <h3>Code Snippets</h3>
            <Button variant="contained" color="primary" onClick={(e) => dispatch(updateSnippetListActionCreator(({item: text})))} >
              Add
            </Button>
            <TextField
                id="new-item"
                label="New Item"
                // value={newItem}
                onChange= {(e) => dispatch(updateSnippetListActionCreator([...list, e.target.value]))}
            />
            <List component="nav">
              {list.map((item, index) => (
                <ListItem button key={index} >
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            </div>
            <div className='editor'>
            <CodeEditor 
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 20,
              width: '500%',
              height: '700px',
              backgroundColor: '#f5f5f5',
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}/>
            </div>
      </div>
    </div>
  );
}

export default SideBar;