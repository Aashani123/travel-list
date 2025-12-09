import "../App.css";
function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        Start adding some items to your packing list 🚀
      </footer>
    );
  }
  const numOfItems = items.length;
  const numOfItemsPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numOfItemsPacked / numOfItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You are ready to go! 🥳"
        : `You have ${numOfItems} items on your list, and you already packed ${numOfItemsPacked} (${percentage}%).`}
    </footer>
  );
}

export default Stats;
