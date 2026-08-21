
function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
      <button
        onClick={onDecrease}
        className="w-8 h-8 text-lg hover:cursor-pointer"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-8 text-center font-medium">{quantity}</span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 text-lg hover:cursor-pointer"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
