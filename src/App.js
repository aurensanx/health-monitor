import React, {useEffect, useState} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ECare} from "./pages/ECare";
import {getInitialPatientInfo, getPatientsInfo} from "./DataSource";

const screens = ['BQ', 'UCI', 'Neonatos', 'Planta Cardio-CCV', 'HD/Arrit', 'Despertar HD/Arrit', 'CEE', 'Domicilio']

function Screens() {
  return (
    <div className="screen">{screens.map(r => <div key={r}>{r}</div>)}</div>
  )
}

function Cardio(props) {
  // const [patientsInfo, setPatientsInfo] = useState(getInitialPatientInfo());
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setPatientsInfo(getPatientsInfo());
  //   }, 2000);
  //
  //   return function cleanup() {
  //     clearInterval(intervalId);
  //   };
  // });
  return (
    <div className="cardio">{props.patientsInfo.map(p => <Link className={p.color || 'green'} to={"/ecare/" + p.id} key={p.id}/>)}</div>
  )
}

function Home(props) {
  document.title = 'Pantalla Flujos - Paciente';
  return (
    <div className="App">
      <Screens />
      <Cardio {...props}/>
    </div>
  )
}

function App() {
  const [patientsInfo, setPatientsInfo] = useState(getInitialPatientInfo());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPatientsInfo(getPatientsInfo());
    }, 2000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  });
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path="/">
          <Home patientsInfo={patientsInfo}/>
        </Route>
        <Route path="/ecare/:patientId" >
          <ECare patientsInfo={patientsInfo}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
