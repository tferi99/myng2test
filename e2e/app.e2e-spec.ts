import { Myng2testPage } from './app.po';

describe('myng2test App', function() {
  let page: Myng2testPage;

  beforeEach(() => {
    page = new Myng2testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
