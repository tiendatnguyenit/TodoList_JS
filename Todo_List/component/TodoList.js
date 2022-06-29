import html from '../core.js'
import { connect } from '../store.js'
import TodoItem from './TodoItem.js'


function TodoList({ todos, filter, filters }) {
    return html `
        <section class="main">
            <input 
                id="toggle-all" 
                class="toggle-all" 
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) =>
                    TodoItem({ todo, index }))
                }
            </ul>
        </section>
    `
}

// cú pháp gọi hàm 2 lần là:
// lần 1: gọi hàm và trả về 1 hàm mới. tương đương: const a = b()
// lần 2: gọi hàm mới . tương đương: a()

export default connect()(TodoList)