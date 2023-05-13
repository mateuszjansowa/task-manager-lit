import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import styles from './_index.scss?inline'

@customElement('app-checkbox')
export class AppCheckbox extends LitElement {
    static styles = unsafeCSS(styles)

    @property({ type: Boolean, attribute: false, reflect: false })
    protected checked = false

    protected render() {
        const checkedClass = classMap({
            'app-checkbox__box--checked': !!this.checked,
        })

        return html`
            <label>
                <div class="app-checkbox__box ${checkedClass}"></div>
            </label>
        `
    }
}
