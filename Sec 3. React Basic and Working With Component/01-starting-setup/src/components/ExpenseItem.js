import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{}</div>
      <div className="expense-item__description">
        <h2 className="expense-item h2 ">{}</h2>
      </div>
      <div className="expense-item__price">{}</div>
    </div>
  );
}
export default ExpenseItem;
