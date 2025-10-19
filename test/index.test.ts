// src/utils/math.test.js

import { describe, test, expect } from "vitest";

describe("Math Utilities", () => {
  // 1. 基本的な加算のテスト
  test("add(1, 1) は 2 を返す", () => {
    // 期待値と実際の結果を比較 (toBe は厳密な等価性をチェック)
    expect(1+1).toBe(2);
  });
});
