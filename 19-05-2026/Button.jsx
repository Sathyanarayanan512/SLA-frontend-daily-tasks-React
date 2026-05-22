const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "border border-gray-300 bg-white hover:bg-gray-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",
}

export default function Button({
  children,
  variant = "primary",
}) {
  return (
    <button
      className={`
        rounded-lg px-5 py-2 font-medium
        transition
        focus:outline-none focus:ring-4
        active:scale-95
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  )
}