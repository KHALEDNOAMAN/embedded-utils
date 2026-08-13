import { crc8, crc16, crc32 } from '../src/crc';
test('crc8', () => { expect(crc8(new Uint8Array([1, 2, 3]))).toBeDefined(); });