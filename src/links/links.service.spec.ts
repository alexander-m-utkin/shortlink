import { generateShortLink } from './links.service';

describe('generateShortLink', () => {
  it('generateShortLink"', () => {
    expect(generateShortLink('https://www.google.com')).toBe('j3vveyVa1l');
    expect(generateShortLink('https://www.youtube.com')).toBe('0kVAbLbJ82');
  });
});
