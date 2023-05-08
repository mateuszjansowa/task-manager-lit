import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import styles from './_index.scss?inline'

@customElement('app-checkbox')
export class AppCheckbox extends LitElement {
    static styles = unsafeCSS(styles)

    @property({ type: Boolean, attribute: true })
    protected checked = null

    @state()
    protected disabled = false

    protected render() {
        return html`
            <label>
                <input
                    class="app-checkbox"
                    type="checkbox"
                    ?checked=${this.checked}
                    ?disabled=${this.disabled}
                />
                <div class="app-checkbox__box"></div>
            </label>
        `
    }
}
