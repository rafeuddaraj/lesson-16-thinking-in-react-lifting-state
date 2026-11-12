export default function Card({ children, ...props }) {
  return (
    <div
      className="rounded-lg border border-(--border) bg-(--surface) p-4 shadow-sm"
      {...props}
    >
      {children}
    </div>
  )
}
