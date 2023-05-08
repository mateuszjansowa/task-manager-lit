import { customElement } from 'lit/decorators.js'
import { html, unsafeCSS, LitElement } from 'lit'
import styles from './_index.scss?inline'

@customElement('app-paper')
export class AppPaper extends LitElement {
    static styles = unsafeCSS(styles)

    protected render() {
        return html`<div class="app-paper">
            <slot></slot>
        </div>`
    }
}
