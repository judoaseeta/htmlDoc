import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
const CodeEditor = ({code , onChange}) => (
    <AceEditor
        mode="markdown"
        theme="github"
        onChange={onChange}
        name="Editor"
        value={code}
        width="500px"
        editorProps={{$blockScrolling: true}}
  />
);
export default CodeEditor;