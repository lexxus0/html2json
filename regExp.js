export const tagsRegExp = /<[^>]+>/g;
export const tagsNameRegExp = /^<\s*([a-zA-Z0-9\-]+)/;
export const attrRegExp = /\s+([a-zA-Z0-9\-]+)(?:\s*=\s*["']([^"']+)["'])?/g;

export const doctypeReplace = /<!DOCTYPE\s*/i;
export const commentReplace = /<!--|-->/g;
