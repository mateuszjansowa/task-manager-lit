import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from '../styles/index.scss?inline'
import { TodoType } from '@/types/todo'
import { addTodo } from '@/slices/todoSlice'
import { connect } from 'pwa-helpers'
import { store } from '@/store'

@customElement('todo-app')
export class TodoApp extends connect(store)(LitElement) {
    static styles = unsafeCSS(styles)

    @property({ type: Array })
    todos: TodoType[] = [
        {
            id: 0,
            content: 'cos zrobic',
            done: false,
        },
        {
            id: 1,
            content: 'milego',
            done: false,
        },
    ]

    renderTodos = () =>
        html`<app-paper>
            ${this.todos.map(
                (todo: TodoType) => html` <app-todo
                    content=${todo.content}
                    id=${todo.id}
                    .isChecked=${todo.done}
                ></app-todo>`,
            )}
        </app-paper>`

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
                        <form
                            @submit=${(e: SubmitEvent) => {
                                e.preventDefault()
                                store.dispatch(
                                    addTodo({
                                        id: 2,
                                        content: 'nowe todo',
                                        done: false,
                                    }),
                                )
                            }}
                        >
                            <div class="app-paper__input-container">
                                <app-input label="Create a new todo..." />
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </app-paper>
            </header>
            <main class="main">
                <div class="main__container">${this.renderTodos()}</div>
            </main>
            <footer class="footer"></footer>
        </div>`
    }
}
