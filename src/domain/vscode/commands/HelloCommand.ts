import { CommandBase } from '../model/CommandBase'
import * as vscode from 'vscode'

export class HelloCommand extends CommandBase {
    constructor() {
        super('helloWorld')
    }

    action(something = 'default') {
        console.log(
            'Congratulations, your extension "helloworld-sample" is now active!'
        )

        vscode.window.activeTextEditor?.edit((editor) => {
            editor.insert(
                new vscode.Position(0, 0),
                `hello world: ${something}`
            )
        })
    }
}
