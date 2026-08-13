import { StateMachine } from '../src/state-machine';
test('state machine init', () => { 
    const sm = new StateMachine();
    sm.addState('IDLE');
    expect(sm.getCurrentState()).toBe('IDLE'); 
});