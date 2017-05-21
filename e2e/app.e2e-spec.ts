import { AwesomeBankCliPage } from './app.po';

describe('awesome-bank-cli App', () => {
  let page: AwesomeBankCliPage;

  beforeEach(() => {
    page = new AwesomeBankCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
