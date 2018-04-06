class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.floor(Math.random() * 2 - 1);
      }
    }
  }

  add(n) {
    if (n instanceof(Matrix)) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }

  static multiply(x,y) {
    if (x.cols !== y.rows) {
      console.log("Cols of A and rows of B do not match.");
      return undefined;
    }
    let a = x.data;
    let b = y.data;
    let result = new Matrix(x.rows, y.cols);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {


        for (let k = 0; k < x.cols; k++) {
          result.data[i][j] += a[i][k] * b[k][j];
          // console.log(`${a[i][k]} x ${b[k][j]} = ${a[i][k] * b[k][j]}`);
        }

      }
    }
    return result;
  }

  multiply(n) {
    if (n instanceof(Matrix)) {
      console.log("Use static method");
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] *= n;
        }
      }
    }
  }

  transpose() {
    let result = new Matrix(this.cols, this.rows);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        result.data[i][j] = this.data[j][i];
      }
    }
    this.data = result.data;
  }

  map (cb) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = cb(this.data[i][j]);
      }
    }
  }

  print () {
    console.log(this.data);
  }
}

// let a = new Matrix(2,3);
// let b = new Matrix(3,2);
// a.randomize();
// b.randomize();
// a.print();
// b.print();
// Matrix.multiply(a,b);
// a.multiply(2);

export default Matrix;

