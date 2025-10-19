import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: "happy-dom",
    global: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "lcov"],
      include: ["pages/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
      // カバレッジ100%
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
    },
  },
});
