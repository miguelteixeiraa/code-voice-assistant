import * as vscode from 'vscode'
import { EXTENSION_PREFIX } from '../../../config/constants'

interface CommandBaseInt {
    name: string
    action: (...arg: any[]) => void
    register: (context: vscode.ExtensionContext) => void
}

export class CommandBase implements CommandBaseInt {
    #name: string
    #extNamespace = EXTENSION_PREFIX

    constructor(name: string) {
        if (!name) {
            throw new Error(
                'Cannot create Commands: invalid name or extension namespace'
            )
        }

        this.#name = `${this.#extNamespace}.${name}`
    }

    get name() {
        return this.#name
    }

    get extNamespace() {
        return this.#extNamespace
    }

    action(..._arg: any[]) {}

    register(context: vscode.ExtensionContext) {
        const disposable = vscode.commands.registerCommand(
            this.#name,
            this.action
        )

        context.subscriptions.push(disposable)
    }
}
