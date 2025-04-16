import { useState } from 'react';
import TitleBar from './titlebar';
import { useContext } from 'react';
import { AppContext } from '../../../context/app';
const Editor = ({markdown, setMarkdown}) => {
    // const {markdown, setMarkdown} = useContext(AppContext)
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);

  const updateMarkdown = (event) => {
    const value = event.target.value;
    setMarkdown(value);
    setWords((value.match(/\b\w+\b/g) || []).length);
    setChars(value.length);
  };


  return (
    <div className="flex flex-col h-full p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <TitleBar title="Editor" aside={`${words} Words ${chars} Characters`} />
      <textarea
        className="w-full flex-grow text-white mb-5 border-none outline-none appearance-none bg-transparent resize-none p-4 dark:bg-gray-800 dark:text-gray-100"
        value={markdown}
        onChange={updateMarkdown}
        placeholder="Start writing in markdown..."
      />
    </div>
  );
};

export default Editor;
