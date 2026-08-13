export class SoftwareTimer {
    constructor(public id: string, public interval: number, public callback: () => void, public isOneShot: boolean = false) {}
}

export class TimerManager {
    private timers: SoftwareTimer[] = [];
    
    addTimer(timer: SoftwareTimer) {
        this.timers.push(timer);
    }
    
    tick(deltaTime: number) {
        // mock implementation
    }
}