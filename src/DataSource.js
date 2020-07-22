const generateSO2 = () => Math.floor((Math.random() * 10) + 90);
const generateFrCardiaca = () => Math.floor((Math.random() * 45) + 110);
const generateFrRespiratoria = () => Math.floor((Math.random() * 18) + 28);
const generateTemperatura = () => Math.random() * 2 + 36;
const generateSistolica = () => Math.floor(Math.random() * 20 + 52);
const generateDiastolica = () => Math.floor(Math.random() * 25 + 28);


const generateRandomPatient = () => ({
  so2: generateSO2(),
  frCardiaca: generateFrCardiaca(),
  frRespiratoria: generateFrRespiratoria(),
  temperatura: generateTemperatura(),
  sistolica: generateSistolica(),
  diastolica: generateDiastolica(),
});


const getScoreSO2 = data => {
  if (data < 85) {
    return 3;
  } else if (data < 90) {
    return 2;
  } else if (data < 94) {
    return 1
  }
  return 0;
}

const getScoreFrCardiaca = data => {
  if (data > 180 || data < 95) {
    return 3;
  } else if (data > 160 || data < 100) {
    return 2;
  } else if (data > 145 || data < 120) {
    return 1
  }
  return 0;
}

const getScoreFrRespiratoria = data => {
  if (data > 65 || data < 20) {
    return 3;
  } else if (data > 55) {
    return 2;
  } else if (data > 45 || data < 30) {
    return 1
  }
  return 0;
}

const getScoreTemperatura = data => {
  if (data > 38.5) {
    return 2;
  } else if (data > 37.5) {
    return 1
  }
  return 0;
}

const getScoreSistolica = data => {
  if (data > 90 || data < 35) {
    return 3;
  } else if (data > 80 || data < 45) {
    return 2;
  } else if (data > 70 || data < 55) {
    return 1
  }
  return 0;
}

const getScoreDiastolica = data => {
  if (data > 70 || data < 20) {
    return 3;
  } else if (data > 60 || data < 25) {
    return 2;
  } else if (data > 50 || data < 30) {
    return 1
  }
  return 0;
}

const getScorePatient = ({so2, frCardiaca, frRespiratoria, temperatura, sistolica, diastolica}) => {
  const scoreSO2 = getScoreSO2(so2);
  const scoreFrCardiaca = getScoreFrCardiaca(frCardiaca);
  const scoreFrRespiratoria = getScoreFrRespiratoria(frRespiratoria);
  const scoreTemperatura = getScoreTemperatura(temperatura);
  const scoreSistolica = getScoreSistolica(sistolica);
  const scoreDiastolica = getScoreDiastolica(diastolica);

  return scoreSO2 + scoreFrCardiaca + scoreFrRespiratoria + scoreTemperatura + scoreSistolica + scoreDiastolica;
}


const getPatientColor = score => {
  if (score > 3) {
    return 'red';
  } else if (score > 1) {
    return 'yellow';
  } else {
    return 'green';
  }
}

const generatePatientInfo = id => {
  const patient = generateRandomPatient();
  const score = getScorePatient(patient);
  const color = getPatientColor(score);
  return {
    id,
    patient,
    score,
    color,
  }
}

export const getPatientsInfo = () => [0, 1, 2, 3, 4, 5].map(id => generatePatientInfo(id));
export const getInitialPatientInfo = () => [0, 1, 2, 3, 4, 5].map(id => ({id}));



