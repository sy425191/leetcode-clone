import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import Markdown from 'react-markdown'

interface ProblemDetailsProps {
    problem : {
        id: string;
        problemName: string;
        problemDescriptionMarkDown: string;
    };
}

export const ProblemDetails = ({ problem }: ProblemDetailsProps) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    // Initialize Monaco Editor
    const editor = monaco.editor.create(document.getElementById('editor')!, {
      value: '// Write your code here',
      language: 'javascript', // You can change the language based on your requirement
      theme: 'vs-dark', // You can change the theme as well
    });

    // Store the editor instance in the ref
    editorRef.current = editor;

    return () => {
      // Dispose of the editor instance when the component is unmounted
      editor.dispose();
    };
  }, []);

  return (
    <div>
     <Markdown>{problem.problemDescriptionMarkDown}</Markdown>

      {/* Container for the Monaco Editor */}
      <div id="editor" style={{ height: '300px' }} />

      {/* You can add other components or UI elements as needed */}
    </div>
  );
};
