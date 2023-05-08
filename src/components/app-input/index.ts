import { customElement, property } from 'lit/decorators.js'
import { LitElement, unsafeCSS, html } from 'lit'
import styles from './_index.scss?inline'

@customElement('app-input')
export default class AppInput extends LitElement {
    static styles = unsafeCSS(styles)

    @property({ attribute: true })
    label = ''

    protected render() {
        return html`<input
            class="app-input"
            type="text"
            placeholder=${this.label}
        />`
    }
}
