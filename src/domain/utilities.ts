type UtilityType = string[];

type UtilitySizeItem =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';

const utilitySizeList = [
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
];

const utilityByNumberRange = (key: string, min: number, max: number): UtilityType => {
  const items: UtilityType = [];
  for (let index = min; index <= max; index++) {
    items.push(`${key}-${index}`);
  }
  return items;
};

const utilityBySizeRange = (
  key: string,
  min: UtilitySizeItem,
  max: UtilitySizeItem,
): UtilityType => {
  const items: UtilityType = [];
  const minIndex = utilitySizeList.indexOf(min);
  const maxIndex = utilitySizeList.indexOf(max);
  for (let index = minIndex; index <= maxIndex; index++) {
    items.push(`${key}-${utilitySizeList[index]}`);
  }
  return items;
};

export { utilityByNumberRange, utilityBySizeRange, UtilityType };
