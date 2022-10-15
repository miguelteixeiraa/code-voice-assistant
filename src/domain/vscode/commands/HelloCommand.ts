import { CommandBase } from '../model/CommandBase'
import * as vscode from 'vscode'

export class HelloCommand extends CommandBase {
    constructor() {
        super('hello')
    }

    action() {
        console.log(
            'Congratulations, your extension "helloworld-sample" is now active!'
        )

        vscode.window.showInformationMessage('Hello World!')
    }
}
