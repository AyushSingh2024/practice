import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [expense, setExpense] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    // 1. Basic validation: Don't add if title is empty or amount <= 0
    if (!title.trim() || !amount) return

    // 2. Create the new expense object
    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount), // Convert string input to number
      category: category
    }

    // 3. Add to the existing list (State Immutability!)
    setExpense([...expense, newExpense])

    // 4. Reset form inputs back to blank
    setTitle('')
    setAmount('')
    setCategory('Food')
  }
  function handleDelete(idToDelete) {
    const updatedExpense = expense.filter((item) => item.id !== idToDelete)
    setExpense(updatedExpense)
  }

  const totalExpense = expense.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount
  }, 0)
  return (
    <>
      <h1>Expense Tracker</h1>
      <p>tracker you expenses here</p>
      <form onSubmit={handleSubmit}>


        <label>Expense Title</label>
        <input type="text"
          placeholder="Expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />

        <label>Amount</label>
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)} />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
        </select>

        <button type="submit" > Add Expense</button>
      </form>


      <h2>Expenses</h2>
      <ul>
        {
          expense.map((item) => (
            <li key={item.id}>{item.title} {item.amount} {item.category}
              <button onClick={() => handleDelete(item.id)}>
                Delete
              </button></li>
          ))
        }
      </ul>

      <h3>Total: ${totalExpense}</h3>
    </>
  )
}

export default App