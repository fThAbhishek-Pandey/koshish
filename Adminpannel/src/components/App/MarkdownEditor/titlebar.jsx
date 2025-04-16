const TitleBar = ({ title, aside }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        {title && <h4 className="text-lg font-semibold mb-2">{title}</h4>}
        {aside && <h6 className="text-sm text-gray-500 dark:text-gray-400">{aside}</h6>}
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600" />
    </div>
  );
  
  export default TitleBar;
  