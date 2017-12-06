import { NrCliPage } from './app.po';

describe('nr-cli App', () => {
  let page: NrCliPage;

  beforeEach(() => {
    page = new NrCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
