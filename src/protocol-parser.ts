export class ProtocolParser {
    private buffer: number[] = [];
    private onFrameCb: ((payload: Uint8Array) => void) | null = null;
    
    constructor(private startByte: number = 0xAA) {}
    
    feed(byte: number) {
        this.buffer.push(byte);
        if (this.buffer[0] !== this.startByte) {
            this.buffer.shift();
            return;
        }
        if (this.buffer.length >= 2) {
            const len = this.buffer[1];
            if (this.buffer.length >= len + 3) { // start + len + payload + checksum
                const payload = this.buffer.slice(2, 2 + len);
                if (this.onFrameCb) this.onFrameCb(new Uint8Array(payload));
                this.buffer = this.buffer.slice(len + 3);
            }
        }
    }
    
    onFrame(callback: (payload: Uint8Array) => void) {
        this.onFrameCb = callback;
    }
}