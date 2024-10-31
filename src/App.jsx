import { MantineProvider, rem} from "@mantine/core";
import LoginPage from "./components/LoginPage";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily:"Inter, sans-serif",
      }}
      >
      <LoginPage />
    </MantineProvider>
  );
}


export default App;