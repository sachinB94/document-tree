import documentTree from '../index';

test('Document tree generation', () => {
  const htmlString = `
    <div class="class1">
      <div id="id1">
        <div className="className1"></div>
        <div className="className2"></div>
      </div>

      <div id="id2">
        <span class="class2" />
      </div>
    </div>
    <span class="class3" />
  `;

  const expectedResult = [
    {
      attributes: {
        class: 'class1'
      },
      children: [
        {
          attributes: {
            id: 'id1'
          },
          children: [
            {
              attributes: {
                classname: 'className1'
              },
              children: [],
              tagName: 'div'
            },
            {
              attributes: {
                classname: 'className2'
              },
              children: [],
              tagName: 'div'
            }
          ],
          tagName: 'div'
        },
        {
          attributes: {
            id: 'id2'
          },
          children: [
            {
              attributes: {
                class: 'class2'
              },
              children: [],
              tagName: 'span'
            }
          ],
          tagName: 'div'
        }
      ],
      tagName: 'div'
    },
    {
      attributes: {
        class: 'class3'
      },
      children: [],
      tagName: 'span'
    }
  ];

  expect(documentTree.generate(htmlString)).toEqual(expectedResult);
});

test('Return empty array on empty data', () => {
  expect(documentTree.generate('')).toEqual([]);
});

test('Attribute with no value', () => {
  expect(documentTree.generate('<div attr></div>')).toEqual([
    { tagName: 'div', attributes: { attr: '' }, children: [] }
  ]);
});
