# document-tree

Generate document tree from your HTML/JSX

## Installation

Use `npm` or `yarn` to install document-tree.

```bash
npm install document-tree --save
```

or

```bash
yarn add document-tree
```

## Usage

```js
const documentTree = require('document-tree'); 

const htmlString = `
  <div id="testId">
    <div class="testClass"></div>
  </div>
`;

const tree = documentTree.generate(htmlString);

// tree = [
//   {
//     tagName: 'div',
//     attributes: {
//       id: 'testId'
//     },
//     children: [
//       {
//         tagName: 'span',
//         attributes: {
//           class: 'testClass'
//         },
//         children: []
//       }
//     ]
//   }
// ]
```