import { expect, test } from 'vitest'
import countingStars from '@/counting-stars'

test('should get 3 stars', () => {
  expect(countingStars(3)).toBe('★★★☆☆')
})
