# Contributing to embedded-utils

We welcome contributions!

## Adding a New Utility
1. Create `src/your-utility.ts`
2. Export from `src/index.ts`
3. Add tests in `tests/your-utility.test.ts`
4. Document in README.md
5. Submit a PR

## Testing
```bash
npm test
npm run test:coverage
```

## Code Quality
- 100% TypeScript strict mode
- All public APIs must have JSDoc
- Minimum 80% test coverage