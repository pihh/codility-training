'use strict';

function FileTreeNode(nodeId, name, type) {
  const children = [];

  this.nodeId = nodeId;
  this.name = name;
  this.type = type;
  this.parentNode = null;

  this.setParent = function(parentNode) {
    this.parentNode = parentNode;
  };
  this.addChild = function(node){

    if (this.type !== 'DIRECTORY') {
      throw "Cannot add child node to a non-directory node";
    }
    if(node){
      children.push(node);
      node.setParent(this);
    }
  };
  this.getChildren = function() {
    return children;
  };
};

function FileTree() {
  this.nodes = [];

  this.getRootNodes = function() {
    const result = [];
    for (let i = 0; i < this.nodes.length; i++) {
      if (!this.nodes[i].parentNode) {
        result.push(this.nodes[i]);
      }
    }
    return result;
  };
  this.findNodeById = function(nodeId) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].nodeId === nodeId) {
        return this.nodes[i];
      }
    }

    return null;
  };
  this.createNode = function(nodeId, name, type, parentNode) {


    const node = new FileTreeNode(nodeId, name, type);

    this.nodes.push(node);
    if (parentNode) {
      parentNode.addChild(node);
    }
  }
};

export function createFileTree(input) {
  const fileTree = new FileTree();
  let rootInputs = input.filter(el => !el.parentId)
  input = input.filter(el => el.parentId).sort((a,b)=> a.id-b.id)
  
  for (const inputNode of rootInputs) {
    var parentNode = inputNode.parentId ? fileTree.findNodeById(inputNode.parentId) : null;
      fileTree.createNode(inputNode.id, inputNode.name, inputNode.type, parentNode);
  }

  for (const inputNode of input) {
    
    // console.log({inputNode, parentId: inputNode.parentId})
    var parentNode = inputNode.parentId ? fileTree.findNodeById(inputNode.parentId) : null;
      fileTree.createNode(inputNode.id, inputNode.name, inputNode.type, parentNode);
  
  }

  return fileTree;
}
