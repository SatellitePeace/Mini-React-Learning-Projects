import SingleQuestion from "./Questions";
import questions from "./data";
import image from "./online-woman.svg";

function App() {
  return (
    <main>
      <div className="container">
        <section>
          <h1>FAQ</h1>
          <img src={image} alt="woman online" />
        </section>

        <section className="info">
          {questions.map((faq) => {
            return <SingleQuestion key={faq.id} {...faq} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
