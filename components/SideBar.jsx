import React, { useEffect, useState } from 'react';
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
  // const list = useSelector((state) => state.snippet.snippets);
  const [list, setList] = useState([]);
  const [codeList, setCodeList] = useState([]);
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('title');

  useEffect(() => {
    fetch('http://localhost:3000/api/snippet/getall/jasonkuyper1', {
      method: 'GET',
    }).then((res) => res.json())
      .then((data) => {
        console.log('THIS IS FROM THE RESPONSE', data);
        const titles = [];
        const codes = [];
        for (const el of data) {
          titles.push(el.title);
          codes.push(el.code);
        }
        setList(titles);
        setCodeList(codes);
        // data.forEach((row) => {
        //   setList([...list, row.title]);
        //   setCodeList([...codeList, row.code]);
        // });
        console.log(titles);
      })
      .catch((err) => {
        console.log(`there was an error getting snippet data error: ${err}`);
      });
  }, []);

  return (

    <div className="sidebar">
      <div className="snippet-container">
        <div className="list-view">
          <h3>Code Snippets</h3>
          <NewSnippetDialog />

          <List component="nav">
            {list.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  setCode(codeList[index]);
                  setTitle(list[index]);
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="editor">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <CodeEditor
            language="js"
            placeholder={code}
            // onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              width: '500%',
              height: '700px',
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
