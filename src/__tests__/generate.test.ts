import documentTree from '../index';

test('Generate document tree', () => {
  const htmlString = `
    <div class="class1">
      <div id="id1">
        <div className="className1"></div>
        <div className="className2"></div>
      </div>

      <div id="id2">
        <span class="class2">
      </div>
    </div>
  `;
  
  expect(documentTree.generate(htmlString)).toEqual({});
});