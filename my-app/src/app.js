import {ChatEngine} from 'react-chat-engine';
import './app.css';
import ChatFeed from './components/ChatFeed';
const App = () => {
    return(
        <ChatEngine
        height = "100vh"
        projectID="15605cc0-da43-4b1b-9000-fddd79cf9a0b"
        userName="hala"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => < ChatFeed { ... chatAppProps } /> }
        />
    );
}

export default App;