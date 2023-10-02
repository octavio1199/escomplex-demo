import { getIntervals } from './index';

import * as escomplex from 'escomplex';

it('test complexity', () => {
  const source = getIntervals;
  const analysisData = escomplex.analyse(source.toString());

  console.log(analysisData);
  expect(analysisData.aggregate.cyclomatic).toBeLessThan(3);
  expect(analysisData.functions[0].cyclomaticDensity).toBeLessThan(30);
});
