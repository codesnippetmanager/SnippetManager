import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

function CodeContainer() {
  const [code, setCode] = React.useState('');
  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 12,
        width: '50%',
        height: '500px',
        backgroundColor: '#f5f5f5',
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}

export default CodeContainer;
