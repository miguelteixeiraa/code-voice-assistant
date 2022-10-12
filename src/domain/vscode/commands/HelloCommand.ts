import { CommandBase } from '../model/Command'

export class HelloCommand extends CommandBase {
    action(world: string) {
        console.log(`Hello ${world}`)
    }
}
