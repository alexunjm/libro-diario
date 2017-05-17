import { LibroDiarioPage } from './app.po';

describe('libro-diario App', () => {
  let page: LibroDiarioPage;

  beforeEach(() => {
    page = new LibroDiarioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
