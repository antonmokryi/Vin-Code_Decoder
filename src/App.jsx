import "./App.css";
import { Routes, Route } from "react-router-dom";
import { VinForm } from "./components/VinForm/VinForm";
import HistoryList from "./components/HistoryList/HistoryList";
import { DecoderResult } from "./components/DecoderResult/DecoderResult";
import HistoryDetails from "./components/HistoryDetails/HistoryDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <VinForm />
            <HistoryList />
            <DecoderResult />
          </>
        }
      />
      <Route path="/history/:id" element={<HistoryDetails />} />
    </Routes>
  );
}

export default App;
