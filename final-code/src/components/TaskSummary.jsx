export default function TaskSummary({ total, done }) {
  return (
    <p>
      মোট {total}টি কাজ, শেষ {done}টি
    </p>
  );
}
