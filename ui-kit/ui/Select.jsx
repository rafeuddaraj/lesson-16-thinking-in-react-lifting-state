export default function Select({ children, ...props }) {
  return (
    <select
      className="rounded-md border border-(--border) bg-(--field) px-3 py-2 text-sm text-(--text)"
      {...props}
    >
      {children}
    </select>
  )
}
