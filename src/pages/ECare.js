import React from 'react';
import './ECare.scss';
import {useParams} from 'react-router';

function Data() {
  return (<div className="data">
    <div>Datos filiación:</div>
    <div>Edad, peso</div>
    <div>Enf de base</div>
    <div>Localización</div>
    <div>Motivo ingreso</div>
  </div>)
}

function Hcis() {
  return (<div className="hcis">
    <div>HCIS:</div>
    <div>Dispositivos</div>
    <div>Diuresis</div>
    <div>Balance hídrico</div>
    <div>SAPI</div>
  </div>)
}

function Lab() {
  return (<div className="lab">Laboratorio</div>)
}

function Image() {
  return (<div className="image">Imagen</div>)
}

function Complications() {
  return (<div className="complications">
    <div>Complicaciones</div>
    <div>Neumotórax</div>
    <div>Derrame pleural</div>
    <div>Derrame pericárdico</div>
  </div>)
}

function MindRay(props) {
  return (<div className="mindRay">
    <div className="mindRayTitle">MindRay</div>
    <div className="frCardiaca">{props.patient?.frCardiaca}</div>
    <div className="so2">{props.patient?.so2}</div>
    <div className="tension">{props.patient?.sistolica + ' / ' + props.patient?.diastolica}</div>
  </div>)
}

function WellA(props) {
  return (<div className="wellA">
    <div className="waTitle">WA</div>
    <div className="temperatura">{(props.patient?.temperatura || 0).toFixed(1)}</div>
    <div className="frRespiratoria">{props.patient?.frRespiratoria}</div>
  </div>)
}

export function ECare(props) {
  const {patientId} = useParams();
  const patientInfo = props.patientsInfo.find(p => p.id === +patientId);
  document.title = 'Pantalla eCare';
  return (<div className="ECare">
    <Data/>
    <MindRay patient={patientInfo.patient}/>
    <WellA patient={patientInfo.patient}/>
    <Hcis/>
    <Lab/>
    <Image/>
    <Complications/>
  </div>)
}
