const tones = {
  gray: 'bg-(--border) text-(--text)',
  green: 'bg-green-100 text-green-700',
  red: 'bg-red-100 text-red-700',
}

export default function Badge({ tone = 'gray', children }) {
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}
