import { muti, sum2 } from '../jest2'

test('adds 1 + 2 to equal 3', () => {
  expect(sum2(1, 2)).toBe(3)
})

test('muti 2 * 4 to equal 8', () => {
  expect(muti(2, 4)).toBe(8)
})
