import { config } from '../../../config/environment'
import * as vscode from 'vscode'

interface CommandBaseInt {
    name: string
    action?: (arg: any) => void
    register: (context: vscode.ExtensionContext) => void
}

export class CommandBase implements CommandBaseInt {
    #name: string

    constructor(name: string) {
        if (!name) {
            throw new Error('Invalid name for a command')
        }
        this.#name = `${config.EXTENSION_PREFIX}.${name}`
    }

    get name() {
        return this.#name
    }

    action(_generic: unknown) {}

    register(context: vscode.ExtensionContext) {
        if (!this.action) {
            console.warn('There is no action to register.')
            return
        }

        const disposable = vscode.commands.registerCommand(
            this.#name,
            this.action
        )

        context.subscriptions.push(disposable)
    }
}
