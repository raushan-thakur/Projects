import { useState } from "react";
import "./File.css";
import dataJson from "./data.json";

/* ---------- List Component ---------- */
const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id} className="">
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpanded[node.name] ? "- " : "+ "}
            </span>
          )}

          <span>{node.name}</span>
          <div>

          <div className="node">
          {node.isFolder && (
            <>
              <span onClick={() => addNodeToList(node.id)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMdgel5SexBhAvOrifUXzb1ETKMx9fVF6QQ&s"
                  alt="add"
                  className="icon"
                />
              </span>

              <span onClick={() => deleteNodeFromList(node.id)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                  alt="delete"
                  className="icon"
                />
              </span>
            </>
          )}
          </div>
          </div>

          {isExpanded[node.name] && node.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

/* ---------- App Component ---------- */
export default function FileExplorer() {
  const [data, setData] = useState(dataJson);

  const addNodeToList = (parentId) => {
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...(node.children || []),
              {
                id: Date.now(),
                name: "New Folder",
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }

        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };

  return (
    <div className="App">
      <h1>File / Folder Explorer</h1>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
}
