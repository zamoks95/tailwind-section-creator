import { utilityByNumberRange, utilityBySizeRange } from './utilities';

describe('<utilityByNumberRange />', () => {
  it('returns keys in number range', () => {
    const mockTest = ['container-1', 'container-2', 'container-3'];
    expect(utilityByNumberRange('container', 1, 3)).toStrictEqual(mockTest);
  });
});

describe('<utilityBySizeRange />', () => {
  it('returns keys in size range', () => {
    const mockTest = ['container-3xs', 'container-2xs', 'container-xs'];
    expect(utilityBySizeRange('container', '3xs', 'xs')).toStrictEqual(mockTest);
  });
  it('returns keys in full size range', () => {
    const mockTest = [
      'container-3xs',
      'container-2xs',
      'container-xs',
      'container-sm',
      'container-md',
      'container-lg',
      'container-xl',
      'container-2xl',
      'container-3xl',
      'container-4xl',
      'container-5xl',
      'container-6xl',
      'container-7xl',
    ];
    expect(utilityBySizeRange('container', '3xs', '7xl')).toStrictEqual(mockTest);
  });
});
