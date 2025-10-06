import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.ts'],
    coverage: {
      include: ['src'],
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});
