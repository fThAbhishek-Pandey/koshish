import { useState } from 'react';
import TitleBar from './titlebar';

const Editor = ({ markdown, setMarkdown }) => {
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);

  const updateMarkdown = (event) => {
    const value = event.target.value;
    setMarkdown(value);
    setWords((value.match(/\b\w+\b/g) || []).length);
    setChars(value.length);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-900 rounded-lg shadow-md">
      <TitleBar title="Editor" aside={`${words} Words ${chars} Characters`} />
      <textarea
        className="w-full flex-grow max-h-[60vh] overflow-auto text-white mb-5 border-none outline-none appearance-none bg-transparent resize-none p-4 dark:bg-gray-800 dark:text-gray-100 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        value={markdown}
        onChange={updateMarkdown}
        placeholder="Start writing in markdown..."
      />
    </div>
  );
};

export default Editor;
