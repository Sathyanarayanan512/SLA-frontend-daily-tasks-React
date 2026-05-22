export default function ButtonGroup() {
  return (
    <div className="flex gap-4">
      <button
        className="
          rounded-lg bg-blue-600 px-5 py-2 text-white
          hover:bg-blue-700
          focus:outline-none focus:ring-8 focus:ring-blue-300
          active:scale-105
          transition
        "
      >
        Save
      </button>

      <button
        className="
          rounded-lg border border-black px-5 py-2
          hover:bg-gray-100
          focus:outline-none focus:ring-4 focus:ring-gray-300
          active:scale-95
          transition
        "
      >
        Cancel
      </button>
    </div>
  )
}