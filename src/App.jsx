import Description from "./components/Description";
import Form from "./components/Form";

function App() {

  return (
    <div className="grid place-content-center min-h-screen max-w-[1000px] mx-auto text-white/90">
      <section className="grid md:grid-cols-2 gap-2 p-4">
        <Description />
        <Form />
      </section>
    </div>
  )
}

export default App
