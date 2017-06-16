import { UrbanRulerPage } from './app.po';

describe('urban-ruler App', () => {
  let page: UrbanRulerPage;

  beforeEach(() => {
    page = new UrbanRulerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
