import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Learn from "./pages/Learn.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import Score from "./pages/Score.jsx";
import Tools from "./pages/Tools.jsx";
import Offers from "./pages/Offers.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/learn" replace />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:lessonId" element={<LessonDetail />} />
        <Route path="/score" element={<Score />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/offers" element={<Offers />} />
      </Route>
    </Routes>
  );
}
