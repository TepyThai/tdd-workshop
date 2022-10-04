import { describe, expect, test } from 'vitest';
import { ClosedInterval } from '../src/ClosedInterval';

const normalCases = [
  {
    lower: 3,
    upper: 7,
    desc: '正の整数の閉区',
  },
  {
    lower: 1,
    upper: 100000,
    desc: '区間の差が大きいの場合',
  },
];

const edgeCases = [
  { lower: -100, upper: -1, desc: '負の整数の場合' },
  { lower: -100, upper: 100, desc: '負と正の場合' },
];

const inputs = [];

// parameterized
describe('検索可能な閉区間整数生成する', () => {
  describe.each(normalCases)('正常系：下端点と上端点からできた閉区間整数インスタンスを生成する', ({ lower, upper, desc }) => {
    const closedInterval = new ClosedInterval(lower, upper);

    test(`(${lower},${upper})${desc}`, () => {
      expect(closedInterval.lowerEndPoint).toBe(lower);
      expect(closedInterval.upperEndPoint).toBe(upper);
    });
  });

  describe.each(edgeCases)('異常系：下端点と上端点からできた閉区間整数インスタンスを生成する', ({ lower, upper, desc }) => {
    const closedInterval = new ClosedInterval(lower, upper);

    test(`(${lower},${upper})${desc}`, () => {
      expect(closedInterval.lowerEndPoint).toBe(lower);
      expect(closedInterval.upperEndPoint).toBe(upper);
    });
  });

  describe('閉区間を表示する', () => {
    test('(3,7)の正整数閉区間整数を文字列 "[3,7]" で表示する', () => {
      const closedInterval = new ClosedInterval(3, 7);
      expect(closedInterval.display()).toBe('[3,7]');
    });
    test('(-100,-1)の負整数閉区間整数を文字列 "[-100,-1]" で表示する', () => {
      const closedInterval = new ClosedInterval(-100, -1);
      expect(closedInterval.display()).toBe('[-100,-1]');
    });
    test('(-100,100)の負と正の整数閉区間整数を文字列 "[-100,-1]" で表示する', () => {
      const closedInterval = new ClosedInterval(-100, 100);
      expect(closedInterval.display()).toBe('[-100,100]');
    });
  });

  describe('閉区間に含まれるかどうかを判断', () => {
    test.each([
      [-100, false],
      [-1, false],
      [0, false],
      [1, false],
      [3, true],
      [5, true],
      [7, true],
      [100, false],
    ])('[3,7] の閉区間整数に %i 含まれている -> %s', (input, expected) => {
      const closedInterval = new ClosedInterval(3, 7);
      expect(closedInterval.contain(input)).toBe(expected);
    });
  });
});
