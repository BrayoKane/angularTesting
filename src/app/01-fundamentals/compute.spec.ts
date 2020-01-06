import { compute} from './compute';

describe('compute', () => {
  it('should return 0 if input is negative', function () {
     const result = compute(-1);
     expect(result).toBe(0);
  });
});
