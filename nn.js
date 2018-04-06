import Matrix from './matrix.js';

class NeuralNetwork {
  constructor (inputNodes, hiddenNodes, outputNodes) {
    this.inputNodes = inputNodes;
    this.hiddenNodes = hiddenNodes;
    this.outputNodes = outputNodes;

    this.weightsIH = new Matrix(this.hiddenNodes, this.inputNodes);
    this.weightsHO = new Matrix(this.outputNodes, this.hiddenNodes);
  }

  feedforward () {

  }
}