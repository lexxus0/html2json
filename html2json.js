import { createElem } from './createElem.js';
import { commentReplace, doctypeReplace, tagsRegExp } from './regExp.js';

export const html2json = () => {
  const inputHtml = document.getElementById('html').value;
  const outputJson = document.getElementById('json');

  let obj = [];
  const tagsStack = [];
  const tags = inputHtml.match(tagsRegExp);

  if (tags === null) {
    return (outputJson.value = 'Please, provide valid HTML code.');
  }

  const addToStack = element => {
    tagsStack.length > 0
      ? tagsStack[tagsStack.length - 1].children.push(element)
      : obj.push(element);
  };

  let index = 0;

  tags.forEach(tag => {
    const currentIndex = inputHtml.indexOf(tag, index);

    if (index < currentIndex) {
      const textBetween = inputHtml.slice(index, currentIndex).trim();
      if (textBetween) {
        addToStack({ text: textBetween });
      }
    }

    index = currentIndex + tag.length;

    switch (true) {
      case tag.startsWith('<!DOC'):
        obj.push({
          declaration: 'DOCTYPE',
          value: tag.replace(doctypeReplace, '').replace(/>/, '').trim(),
        });
        break;

      case tag.startsWith('</'):
        if (
          tagsStack.length > 0 &&
          tagsStack[tagsStack.length - 1].tag === tag.replace(/<\/|>/g, '')
        ) {
          tagsStack.pop();
        }
        break;

      case tag.startsWith('<!--'):
        const commentElem = {
          comment: tag.replace(commentReplace, '').trim(),
        };
        addToStack(commentElem);
        break;

      case tag.endsWith('/>'):
        const selfCloseElem = createElem(tag);
        addToStack(selfCloseElem);
        break;

      default:
        const newElem = createElem(tag);
        addToStack(newElem);
        tagsStack.push(newElem);
    }
  });

  if (index < inputHtml.length) {
    const remainingText = inputHtml.slice(index).trim();
    if (remainingText) {
      addToStack({ text: remainingText });
    }
  }

  const removeEmptyChildren = element => {
    if (element.children && element.children.length === 0) {
      delete element.children;
    } else if (element.children) {
      element.children.forEach(child => removeEmptyChildren(child));
    }
  };

  obj.forEach(element => removeEmptyChildren(element));

  outputJson.value = JSON.stringify(obj, null, 2);
};

window.html2json = html2json;
