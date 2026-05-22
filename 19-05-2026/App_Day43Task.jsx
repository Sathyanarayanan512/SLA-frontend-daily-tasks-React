import Navbar from "./Day43/19-05-2026/Navbar"
import Card from "./Day43/19-05-2026/Card"
import ButtonGroup from "./Day43/19-05-2026/ButtonGroup"
import Button from "./Day43/19-05-2026/Button"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="border border-dotted border-gray-600 mx-auto mt-2 mb-2 max-w-4xl p-6">
        <Card>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button>Ok</Button>
            <Button variant="secondary">No</Button>
          </div>
        </Card>

        <div className="mt-8">
          <ButtonGroup />
        </div>
      </main>
    </div>
  )
}