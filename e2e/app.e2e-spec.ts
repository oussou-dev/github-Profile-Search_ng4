import { Ng4GithubSearchPage } from './app.po';

describe('ng4-github-search App', () => {
  let page: Ng4GithubSearchPage;

  beforeEach(() => {
    page = new Ng4GithubSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
