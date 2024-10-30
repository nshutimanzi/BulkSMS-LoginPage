import { MantineProvider, rem} from "@mantine/core";
import LoginPage from "./components/LoginPage";
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily:'Inter, sans-serif',
        defaultRadius: 'md',
        components: {
          TextInput: {
            styles: {
              input: {height: rem(48)}
            }
          },
          PasswordInput: {
            styles: {
              input: { height: rem(48)}
            }
          }
        }
      }}>
      <LoginPage/>
    </MantineProvider>
  );
}

export default App;