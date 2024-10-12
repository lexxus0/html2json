import { createElem } from "./createElem.js";
import { tagsRegExp } from "./regExp.js";

export const html2json = () => {
  const inputHtml = document.getElementById('html').value;
  const outputJson = document.getElementById('json');

  let obj = [];
  const tagsStack = [];
  const tags = inputHtml.match(tagsRegExp);

  if (!tags) return outputJson.value = 'Please, provide valid HTML code.';
  
  tags.forEach((tag) => {
  switch (true) {
  case tag.startsWith('<!DOC'):
  obj.push({
    declaration: "DOCTYPE",
    value: tag.replace(/<!DOCTYPE\s*/i, "").replace(/>/, "").trim()
  });
  break;

  case tag.startsWith('</'):
  if (tagsStack.length > 0 && tagsStack[tagsStack.length - 1].tag === tag.replace(/<\/|>/g, "")) tagsStack.pop();
  break;

  case tag.startsWith('<!--'):
  const commentElem = {
  comment: tag.replace(/<!--|-->/g, "").trim()
  };
  tagsStack.length > 0
  ? tagsStack[tagsStack.length - 1].children.push(commentElem)
  : obj.push(commentElem);
  break;

  case tag.endsWith('/>'):
  const selfCloseElem = createElem(tag);
  tagsStack.length > 0
  ? tagsStack[tagsStack.length - 1].children.push(selfCloseElem)
  : obj.push(selfCloseElem);
  break;

  default:
  const newElem = createElem(tag);
  const nextText = inputHtml.slice(inputHtml.indexOf(tag) + tag.length).match(/[^<]+/);
  if (nextText && nextText[0].trim()) newElem.text = nextText[0].trim();
  tagsStack.length > 0
  ? tagsStack[tagsStack.length - 1].children.push(newElem)
  : obj.push(newElem);
  tagsStack.push(newElem);
  }
  });

  outputJson.value = JSON.stringify(obj, null, 2);
};

window.html2json = html2json;