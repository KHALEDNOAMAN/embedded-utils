import { StateMachine } from '../src/state-machine';
const sm = new StateMachine();
sm.addState('INIT', () => console.log('Init'));
sm.addState('READING', () => console.log('Reading'));
sm.addTransition('INIT', 'READY', 'READING');
sm.trigger('READY');