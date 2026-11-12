export default function Input(props) {
  return (
    <input
      className="w-full rounded-md border border-(--border) bg-(--field) px-3 py-2 text-sm text-(--text) outline-none focus:border-blue-500"
      {...props}
    />
  )
}
