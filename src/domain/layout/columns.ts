import { utilityByNumberRange, utilityBySizeRange, UtilityType } from '../utilities';

const columns: UtilityType = [
  ...utilityByNumberRange('columns', 1, 12),
  'columns-auto',
  ...utilityBySizeRange('columns', '3xs', '7xl'),
];

export { columns };
