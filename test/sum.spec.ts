import sum from '../src/util/sum';

import { expect, it } from 'vitest';

it('1 + 2 should be 3', () => {
	expect(sum(1, 2)).toBe(3);
});
