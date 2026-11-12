export default function navLinkClass({ isActive }) {
  return `rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? 'bg-blue-600 text-white' : 'hover:bg-(--border)'
  }`
}
