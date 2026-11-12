export default function Stack({ children, ...props }) {
  return (
    <div className="flex flex-col gap-3" {...props}>
      {children}
    </div>
  )
}
