import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 267.67,
      date: new Date(2021, 1, 12),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 2323.3,
      date: new Date(2021, 10, 12),
    },
    {
      id: "e3",
      title: "Bike",
      amount: 264437.67,
      date: new Date(2021, 12, 11),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
