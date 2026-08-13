import { RingBuffer } from '../src/ring-buffer';
test('ring buffer empty', () => { expect(new RingBuffer(10).isEmpty()).toBe(true); });