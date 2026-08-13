export function setBit(value: number, bit: number): number { return value | (1 << bit); }
export function clearBit(value: number, bit: number): number { return value & ~(1 << bit); }
export function toggleBit(value: number, bit: number): number { return value ^ (1 << bit); }
export function testBit(value: number, bit: number): boolean { return (value & (1 << bit)) !== 0; }
export function extractBits(value: number, start: number, length: number): number {
    const mask = (1 << length) - 1;
    return (value >> start) & mask;
}
export function countSetBits(value: number): number {
    let count = 0;
    let v = value;
    while (v) {
        v &= (v - 1);
        count++;
    }
    return count;
}
export function reverseBits(value: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        if ((value & (1 << i)) !== 0) {
            result |= (1 << (31 - i));
        }
    }
    return result >>> 0;
}
export function byteSwap16(value: number): number {
    return ((value & 0xFF) << 8) | ((value >> 8) & 0xFF);
}
export function byteSwap32(value: number): number {
    return ((value & 0xFF) << 24) |
           ((value & 0xFF00) << 8) |
           ((value >> 8) & 0xFF00) |
           ((value >>> 24) & 0xFF);
}