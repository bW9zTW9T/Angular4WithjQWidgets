import { Angular4WithjQWidgetsPage } from './app.po';

describe('angular4-withj-qwidgets App', () => {
  let page: Angular4WithjQWidgetsPage;

  beforeEach(() => {
    page = new Angular4WithjQWidgetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
