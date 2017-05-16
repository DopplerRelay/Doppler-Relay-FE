import { RelayWebappPage } from './app.po';

describe('relay-webapp App', () => {
  let page: RelayWebappPage;

  beforeEach(() => {
    page = new RelayWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
