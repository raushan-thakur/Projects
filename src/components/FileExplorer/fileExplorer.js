import { useState } from "react";
import Folder from "./Folder";
import useTraverseTree from "./useTraverseTree";
import explorer from "./folderData";

const FileExplorer = () =>{
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
export default FileExplorer;