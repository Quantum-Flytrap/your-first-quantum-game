// importing parts we need from Quantum Tensors
const { Cx, Vector, Entanglement, Dimension } = QuantumTensors;

let state = Vector.fromSparseCoordNames([
  ['00', Cx(1)],
  ['01', Cx(1)],
  ['10', Cx(-1)],
  ['11', Cx(1)]], Dimension.qubits(2)).normalize();

const displayState = document.getElementById('display-state');
const displayEntanglement = document.getElementById('display-entangelment');

const updateViewer = () => {
  displayState.innerHTML = state.toKetString();
  displayEntanglement.innerHTML = Entanglement.renyi2(state, [0]).toFixed(3);
};

updateViewer();

const onButtonClick = () => {
  console.log("Button clicked!");
  const r = Math.random();
  if (r < 0.5) {
    const qubit1 = Vector.random(Dimension.qubits(1));
    const qubit2 = Vector.random(Dimension.qubits(1));
    state = qubit1.outer(qubit2);
  } else {
    state = Vector.random(Dimension.qubits(2));
  }
  updateViewer();
};
