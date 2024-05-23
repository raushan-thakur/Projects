import { useState } from "react";

function Folder({ handleInsertNode = () => {}, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="">
        <div onClick={() => setExpand(!expand)} className="mt-1 bg-gray-300 flex items-center justify-between p-0.5 w-72 cursor-pointer">
          <span>📁 {explorer.name}</span>

          <div>
            <button className="border border-gray-400 m-1 p-1" onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button className="border border-gray-400 m-1 p-1" onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="flex gap-5">
           <span>{showInput.isFolder? "📁" : "📄"}</span> 
           <input
              type="text"
              className="mt-1 p-1  border border-gray-300 cursor-pointer"
              autoFocus
              onKeyDown={onAddFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
              </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                key={exp.id}
                explorer={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="mt-1 pl-1 flex flex-col">📄 {explorer.name}</span>;
  }
}

export default Folder;