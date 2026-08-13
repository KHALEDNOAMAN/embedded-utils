export type Action = () => void;
export type Guard = () => boolean;

export class StateMachine {
    private currentState: string = '';
    private states: Set<string> = new Set();
    private transitions: Map<string, { event: string; to: string; guard?: Guard }[]> = new Map();
    private enterActions: Map<string, Action> = new Map();
    private exitActions: Map<string, Action> = new Map();

    addState(name: string, onEnter?: Action, onExit?: Action) {
        this.states.add(name);
        if (onEnter) this.enterActions.set(name, onEnter);
        if (onExit) this.exitActions.set(name, onExit);
        if (!this.currentState) this.currentState = name;
    }

    addTransition(from: string, event: string, to: string, guard?: Guard) {
        if (!this.transitions.has(from)) this.transitions.set(from, []);
        this.transitions.get(from)!.push({ event, to, guard });
    }

    trigger(event: string): boolean {
        const trans = this.transitions.get(this.currentState) || [];
        for (const t of trans) {
            if (t.event === event && (!t.guard || t.guard())) {
                const exit = this.exitActions.get(this.currentState);
                if (exit) exit();
                this.currentState = t.to;
                const enter = this.enterActions.get(this.currentState);
                if (enter) enter();
                return true;
            }
        }
        return false;
    }

    getCurrentState(): string { return this.currentState; }
}