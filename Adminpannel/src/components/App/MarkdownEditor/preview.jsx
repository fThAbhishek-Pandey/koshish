import TitleBar from './titlebar';
import ReactMarkdown from 'react-markdown';
import { useContext } from 'react';
import { AppContext } from '../../../context/app';
const Preview = ({ markdown}) => {


  return (
    <div className="flex flex-col h-full p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <TitleBar title="Preview" />
      <div className="overflow-auto flex-grow mt-4 p-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md shadow-sm max-h-[70vh]">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
