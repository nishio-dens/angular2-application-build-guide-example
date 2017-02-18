import { SimpleAuthExamplePage } from './app.po';

describe('simple-auth-example App', function() {
  let page: SimpleAuthExamplePage;

  beforeEach(() => {
    page = new SimpleAuthExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
