import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from '../styles/index.scss?inline'
import '../components/app-paper/index.ts'

@customElement('todo-app')
export class TodoApp extends LitElement {
    static styles = unsafeCSS(styles)

    render() {
        return html`<div class="app">
            <header class="header">
                <h1 class="header__title">todo</h1>
                <app-paper>
                    <input type="text" />
                </app-paper>
            </header>
            <main class="main"></main>
            <footer class="footer"></footer>
        </div>`
    }
}
