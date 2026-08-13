import { ProtocolParser } from '../src/protocol-parser';
const parser = new ProtocolParser(0x55);
parser.onFrame(payload => console.log('Received payload:', payload));
parser.feed(0x55);
parser.feed(0x01);
parser.feed(0xFF);
parser.feed(0x00);