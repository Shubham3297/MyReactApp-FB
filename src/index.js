import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Greet from './components/fbGreet';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Message from './components/Message';
import Colorlist from './components/Colorlist';
import CssInReact from './components/CssInReact';
import User from './components/User';
import ErrorBoundary from './components/ErrorBoundary';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import DemoComp from './components/DemoComp';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import UserTwo from './components/UserTwo';
import UserForm from './components/UserForm';
import FavourateColor from './components/FavourateColor';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Greet name="Shubham" post="Full Stack Developer"></Greet> */}
    {/* <ClickCounter name="Gaikwad" post="MERN and MEAN Stack DEveloper" /> */}
    {/* <HoverCounter></HoverCounter> */}
    {/* <Message /> */}
    {/* <Colorlist></Colorlist> */}
    {/* <CssInReact /> */}

    {/* <ErrorBoundary>
      <User uname="Shubham" />
    </ErrorBoundary>
    <ErrorBoundary>
      <User uname="Smita" />
    </ErrorBoundary>
    <ErrorBoundary>
      <User uname="Varun" />
    </ErrorBoundary> */}
    {/* <Comp1 uname="Shubham"></Comp1>
    <Comp2 uname="Gaikwad"></Comp2> */}

    {/* <DemoComp render={(isLogin) => isLogin ? "Admin" : "User"}></DemoComp> */}

    {/* <ClickCounterTwo></ClickCounterTwo>
    <HoverCounterTwo></HoverCounterTwo> */}

    {/* <UserTwo render={(count, incrementHandler) => <ClickCounterTwo count={count} incrementHandler={incrementHandler} />}></UserTwo>
    <UserTwo render={(count, incrementHandler) => <HoverCounterTwo count={count} incrementHandler={incrementHandler} />}></UserTwo> */}

    {/* <UserForm></UserForm> */}
    {/* <FavourateColor color="Yellow" /> */}

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
