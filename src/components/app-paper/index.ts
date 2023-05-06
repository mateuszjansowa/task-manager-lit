import { customElement } from 'lit/decorators.js'
import { html, unsafeCSS, LitElement } from 'lit'
import styles from './index.scss?inline'

@customElement('app-paper')
export class AppPaper extends LitElement {
    static styles = unsafeCSS(styles)

    createRenderRoot() {
        return this
    }

    render() {
        return html`<div class="app-paper">
            <slot></slot>
        </div>`
    }
}
