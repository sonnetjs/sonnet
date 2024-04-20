export function serverParse<T>(el: HTMLElement): T {
  let attributes = '';

  if (el?.outerHTML || el?.outerText) {
    return (el?.outerHTML ?? el?.outerText) as T;
  }

  for (const key in el) {
    if (ommitAttributes.includes(key)) {
      continue;
    } else if (key === 'className') {
      attributes += `class="${el[key as keyof HTMLElement]}" `;
    } else if (key === 'dataset') {
      for (const dataKey in el.dataset) {
        attributes += `data-${dataKey}="${el.dataset[dataKey]}" `;
      }
    } else if (Object.prototype.hasOwnProperty.call(el, key)) {
      const value = el[key as keyof HTMLElement];
      attributes += `${key}="${value}" `;
    }
  }

  if (isSelfClosingTag(el?.tagName as string)) {
    return `<${el?.tagName} ${attributes}/>` as T;
  }

  return `<${el?.tagName} ${attributes}>${
    el?.innerHTML ?? el?.innerText ?? el?.textContent ?? ''
  }</${el?.tagName}>` as T;
}

const ommitAttributes = [
  'tagName',
  'innerHTML',
  'innerText',
  'textContent',
  'outerHTML',
  'outerText',
];

const selfClosingTags = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

function isSelfClosingTag(tagName: string) {
  return selfClosingTags.indexOf(tagName.toLowerCase()) !== -1;
}
