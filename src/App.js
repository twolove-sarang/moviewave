import "./App.css";
import NavSection from "./component/NavSection";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailPage from "./pages/DetailPage";
import MovieWave from "./pages/MovieWave";
import Categorize from "./pages/Categorize";
import { Routes, Route } from "react-router";

//nav의 각 탭으로 이동할 수 있다. v
//home에는 메인페이지가 나온다. v
//api를 가져온다.
// -메인페이지에는 큰 화면과 작은 캐려셸들이 있다.
//영화를 누르면 디테일한 페이지에서 내용들을 확인할 수 있다.
//movieWave에는 영화추천이 나온다.
//categorize에는 카테고리로 영화를 찾을 수 있다.

//input창으로 원하는 영화를 검색할 수 있다.

const API_KEY = process.env.REACT_APP_API_KEY;
function App() {

  // useEffect(() => {
  //   movieSelector();
  // }, []);
  return (
    <div>
      <NavSection />
      <Routes>
        <Route path="/" element={<MovieWave/>} />
        <Route path="/categorize" element={<Categorize />} />
        <Route path="/categorize/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
