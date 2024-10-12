import { tagsNameRegExp, attrRegExp } from "./regExp.js";

export const createElem = (tag) => {
  const tagName = tag.match(tagsNameRegExp)[1];
  const attributes = {};
  let match;
  
  while ((match = attrRegExp.exec(tag)) !== null) {
  const attrName = match[1];
  const attrValue = match[2] !== undefined ? match[2] : true;
  attributes[attrName] = attrValue;
  }

  const elem = { tag: tagName };
  if (Object.keys(attributes).length > 0) elem.attributes = attributes;
  elem.children = [];
  
  return elem;
}