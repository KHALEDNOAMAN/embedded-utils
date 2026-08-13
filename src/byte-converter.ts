export function uint8ToInt8(val: number): number {
    return val > 127 ? val - 256 : val;
}
export function int16ToBytes(val: number): Uint8Array {
    const arr = new Uint8Array(2);
    const view = new DataView(arr.buffer);
    view.setInt16(0, val, true);
    return arr;
}
export function bytesToInt16(val: Uint8Array): number {
    const view = new DataView(val.buffer);
    return view.getInt16(0, true);
}
export function float32ToBytes(val: number): Uint8Array {
    const arr = new Uint8Array(4);
    const view = new DataView(arr.buffer);
    view.setFloat32(0, val, true);
    return arr;
}
export function bytesToFloat32(val: Uint8Array): number {
    const view = new DataView(val.buffer);
    return view.getFloat32(0, true);
}
export function hexStringToBytes(val: string): Uint8Array {
    const match = val.match(/.{1,2}/g);
    return new Uint8Array(match ? match.map(byte => parseInt(byte, 16)) : []);
}
export function bytesToHexString(val: Uint8Array): string {
    return Array.from(val).map(b => b.toString(16).padStart(2, '0')).join('');
}