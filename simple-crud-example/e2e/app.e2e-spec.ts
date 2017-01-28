import { SimpleCrudExamplePage } from './app.po';

describe('simple-crud-example App', function() {
  let page: SimpleCrudExamplePage;

  beforeEach(() => {
    page = new SimpleCrudExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
