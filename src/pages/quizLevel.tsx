export default function QuizLevel() {
  return (
    <div className="sm:container bg-lime-300">
      <h1>Select Quiz Level</h1>
      <div className="flex flex-row justify-around">
        <div>
          <img src="https://picsum.photos/id/29/200" />
          <button>Easy</button>
        </div>
        <div>
          <img src="https://picsum.photos/id/29/200" />
          <button>Medium</button>
        </div>
        <div>
          <img src="https://picsum.photos/id/29/200" />
          <button>Hard</button>
        </div>
        <div>
          <img src="https://picsum.photos/id/29/200" />
          <button>Riddikulus</button>
        </div>
      </div>
    </div>
  );
}
