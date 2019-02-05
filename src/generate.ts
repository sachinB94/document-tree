import * as parse5 from 'parse5';

interface InterfaceParse5Attribute {
  name: string;
  value: string;
}

interface InterfaceParse5TreeElement {
  nodeName: string;
  tagName: string;
  attrs: InterfaceParse5Attribute[];
  childNodes: InterfaceParse5TreeElement[];
}

interface InterfaceParse5DocumentFragment {
  childNodes: InterfaceParse5TreeElement[];
}

interface InterfaceAttribute {
  [key: string]: string;
}

export interface InterfaceNode {
  tagName: string;
  attributes: InterfaceAttribute;
  children: InterfaceNode[];
}

const getNode = (elementNode: InterfaceParse5TreeElement): InterfaceNode => {
  const attributes: InterfaceAttribute = {};

  (elementNode.attrs || []).forEach(({ name, value }) => {
    attributes[name] = value;
  });

  const children: InterfaceNode[] = elementNode.childNodes
    .filter(childNode => childNode.nodeName !== '#text')
    .map(childNode => getNode(childNode as InterfaceParse5TreeElement));

  return {
    attributes,
    children,
    tagName: elementNode.tagName
  };
};

export default (htmlString: string): InterfaceNode[] => {
  const document = parse5.parseFragment(htmlString.trim()) as InterfaceParse5DocumentFragment;

  const tree = (document.childNodes || [])
    .filter(childNode => childNode.nodeName !== '#text')
    .map(childNode => getNode(childNode as InterfaceParse5TreeElement));

  return tree;
};
