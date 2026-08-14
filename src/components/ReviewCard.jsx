function ReviewCard({ name, review }) {
  return (
    <div className="border rounded-xl p-6 ">

      <p className="text-yellow-400">
        ★★★★★
      </p>
      <h3 className="font-bold mt-6">
        {name} ✓
      </h3>
      <p className="text-gray-500 text-sm mt-6">
        "{review}"
      </p>
    </div>
  );
}

export default ReviewCard;