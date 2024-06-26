import { expect, test } from 'vitest'
import { add } from './main'

test("zero", () => {
  expect(add("")).toBe(0)
})

test("1 plus 2", () => {
  expect(add("1,2")).toBe(3)
})

test("avec lettres", () => {
  expect(add("1,l")).toBe("NaN")
})

test("1 chiffre", () => {
  expect(add("1")).toBe(1)
})

test("trop long", () => {
  expect(add("1,2,3")).toBe(6)
})

test("saut a la ligne", () => {
  expect(add("1\n2,3")).toBe(6)
})

test("saut a la ligne", () => {
  expect(add("1,2,3a")).toBe("NaN")
})