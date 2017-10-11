import { SpaceMonkeyIPage } from './app.po';

describe('space-monkey-i App', function() {
  let page: SpaceMonkeyIPage;

  beforeEach(() => {
    page = new SpaceMonkeyIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
