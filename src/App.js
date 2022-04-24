import AnnotationBox from "./components/AnnotationBox";
import RecordsBar from "./components/RecordsBar";
import TextHighlightsBox from "./components/TextHighlightsBox";

function App() {
  return (
    <div className="container">
      <RecordsBar />

      <AnnotationBox />

      <TextHighlightsBox />
    </div>
  );
}

export default App;
