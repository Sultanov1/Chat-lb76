import Navbar from './features/messages/components/Navbar.tsx';
import {Container} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import ChatForm from './features/messages/ChatForm.tsx';
import Chat from './features/messages/Chat.tsx';


const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path='/' element={<Chat/>} />
          <Route path='/messages-form' element={<ChatForm/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;