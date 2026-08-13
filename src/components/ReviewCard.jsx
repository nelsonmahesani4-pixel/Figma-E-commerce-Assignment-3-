
export default function ReviewCard({ review }) {
  return (
    <div className="p-4 border rounded">
      <p>"{review.text}"</p>
      <p className="text-yellow-500">⭐ {review.rating}</p>
      <p>- {review.author}</p>
    </div>
  );
}
