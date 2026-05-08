import Button from './Day 36/06-05-2026/Button.jsx'
import Header from './Day 36/06-05-2026/Header.jsx'
import Footer from './Day 36/06-05-2026/Footer.jsx'
import Layout from './Day 36/06-05-2026/Layout.jsx';
import UserCard from './Day 36/06-05-2026/UserCard.jsx';

function App_Day36Task(){
    function handleClick() {
      alert("Button clicked!");
    }
    return (
        <>
          <Header headerText="Day 36 React Task"/>
          <Button label="Click" onClick={handleClick}/>
          <Layout>
            <h1>Child 1</h1>
            <h2>Child 2</h2>
            <h3>Child 3</h3>
          </Layout>
          <UserCard name="Sathya" age="23"/>
          <Footer footerText="This is a footer"/>
        </>
    )
}

export default App_Day36Task