import { expect, test } from 'vitest'

test('should work as expected', () => {
  const yolo = ++[[]][+[]] + [+[]]
  const oops = '10'

  expect(yolo).toBe(oops)
})
