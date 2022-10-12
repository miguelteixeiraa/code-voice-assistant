import { CommandBase } from '../model/CommandBase'

export class HelloCommand extends CommandBase {
    constructor() {
        super('hello')
    }

    action(world: string) {
        console.log(`Hello ${world}`)
    }
}
