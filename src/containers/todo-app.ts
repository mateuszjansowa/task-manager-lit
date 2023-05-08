import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from '../styles/index.scss?inline'

@customElement('todo-app')
export class TodoApp extends LitElement {
    static styles = unsafeCSS(styles)

    render() {
        return html`<div class="app">
            <header class="header">
                <h1 class="header__title">todo</h1>

                <app-paper>
                    <div class="app-paper__header">
                        <app-checkbox
                            .checked=${false}
                            .disabled=${true}
                        ></app-checkbox>
                        <div class="app-paper__input-container">
                            <app-input label="Create a new todo..." />
                        </div>
                    </div>
                </app-paper>
            </header>
            <main class="main">
                <div class="main__container">
                    <app-paper>
                        <app-todo></app-todo>
                    </app-paper>
                </div>
            </main>
            <footer class="footer"></footer>
        </div>`
    }
}
