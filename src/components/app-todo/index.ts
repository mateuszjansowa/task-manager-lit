import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import styles from './_index.scss?inline'

@customElement('app-todo')
export class AppTodo extends LitElement {
    static styles = unsafeCSS(styles)
    @property({ type: String, attribute: true })
    content = ''

    @property()
    protected isChecked = false

    toggleIsChecked = () => {
        this.isChecked = !this.isChecked
    }

    protected render() {
        const classes = {
            'app-todo__content--checked': this.isChecked,
        }

        return html`<div class="app-todo" @click=${this.toggleIsChecked}>
            <app-checkbox .checked=${this.isChecked}></app-checkbox>
            <p class="app-todo__content ${classMap(classes)}">
                ${this.content}
            </p>
        </div>`
    }
}
