import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import recurso2 from './recurso2.png'
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pos0_0: null,
      pos0_1: null,
      pos0_2: null,
      pos1_0: null,
      pos1_1: null,
      pos1_2: null,
      pos2_0: null,
      pos2_1: null,
      pos2_2: null,
      miniMatrix: null,
      polinomioCaracteristico: null,
      lambda: '-λ',
      firstFlag: false,
      secondFlag: false,
      contador: 0,
      bigFlag: true,
    }
  }

  getValuesOfMatrix(position, value) {
    switch (position) {
      case '[0][0]':
        this.setState({ ...this.state, pos0_0: value })
        break;
      case '[0][1]':
        this.setState({ ...this.state, pos0_1: value })
        break;
      case '[0][2]':
        this.setState({ ...this.state, pos0_2: value })
        break;
      case '[1][0]':
        this.setState({ ...this.state, pos1_0: value })
        break;
      case '[1][1]':
        this.setState({ ...this.state, pos1_1: value })
        break;
      case '[1][2]':
        this.setState({ ...this.state, pos1_2: value })
        break;
      case '[2][0]':
        this.setState({ ...this.state, pos2_0: value })
        break;
      case '[2][1]':
        this.setState({ ...this.state, pos2_1: value })
        break;
      case '[2][2]':
        this.setState({ ...this.state, pos2_2: value })
        break;
    }
  }

  generate() {
    if (this.state.contador == 0) {
      this.matrixWithLambda()
    } else if (this.state.contador == 1) {
      this.getPolinomioCaracteristico()
    } else if (this.state.contador == 2) {
      this.setState({ bigFlag: false })
    }
  }

  renderSecondPart() {
    return (
      <div className="content">
        <div className="findV" >
          <div>
            <div className="miniGridV" >
              <div className="bla" >−1.1069</div>
              <div className="bla" >1</div>
              <div className="bla" >0.5</div>

              <div className="bla" >0.9</div>
              <div className="bla" >−1.1069</div>
              <div className="bla" >0</div>

              <div className="bla" >0</div>
              <div className="bla"  >0.8</div>
              <div className="bla" >−1.1069</div>
            </div>
            <span className="sabo" >X</span>
            <div className="miniGridVx2" >
              <div className="bla" >x1</div>
              <div className="bla" >x2</div>
              <div className="bla" >x3</div>
            </div>
            <span className="sabox2" >=</span>
            <div className="miniGridVx2" >
              <div className="bla" >0</div>
              <div className="bla" >0</div>
              <div className="bla" >0</div>
            </div>
          </div>

          <div className="ledZeppelin" >
            <div style={{ display: 'flex' }} >
              <div style={{ height: 'min-content', marginLeft: '26%', width: '150px' }} > 𝑥1 = 1.7017 </div>
              <div style={{ height: 'min-content', marginLeft: '20px', width: '150px' }} > 𝑥2 = 1.3836 </div>
              <div style={{ height: 'min-content', marginLeft: '20px', width: '150px' }} > 𝑥3 = 1 </div>
            </div>
            <div className="miniGridVx3" >
              <div className="bla" >0.41654</div>
              <div className="bla" >0.33868</div>
              <div className="bla" >0.24478</div>
            </div>
          </div>
        </div>

        <div >
          <div>Resultados</div>
          <p>
            Después de muchos años, la población aumentará aproximadamente 10.7% en cada periodo de 15 años
          </p>
          <p>
            En porcentaje de mujeres de 45 años o menos, será finalmente de 41.6% en menos de 15 años, 
            entre 33.9% entre 15 y 30 años y 24.5% entre 30 y 45 años.
          </p>
        </div>

      </div>
    )
  }

  renderFirstPart() {
    return (
      <div className="content" >
        <div className="column1">
          <TextField label="[0][0]" margin="normal" variant="filled" className="input"
            style={{ marginLeft: '20px' }} onChange={(event) => this.getValuesOfMatrix('[0][0]', event.target.value)} />
          <TextField style={{ marginTop: '15px' }} label="[0][1]" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[0][1]', event.target.value)} />
          <TextField style={{ marginTop: '15px' }} label="[0][2]" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[0][2]', event.target.value)} />

          <TextField style={{ marginLeft: '20px' }} label="[1][0]" margin="normal" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[1][0]', event.target.value)} />
          <TextField style={{ marginTop: '15px' }} label="[1][1]" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[1][1]', event.target.value)} />
          <TextField style={{ marginTop: '15px' }} label="[1][2]" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[1][2]', event.target.value)} />

          <TextField style={{ marginLeft: '20px' }} label="[2][0]" margin="normal" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[2][0]', event.target.value)} />
          <TextField style={{ marginTop: '15px' }} label="[2][1]" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[2][1]', event.target.value)} />
          <TextField style={{ marginTop: '15px' }} label="[2][2]" variant="filled" className="input"
            onChange={(event) => this.getValuesOfMatrix('[2][2]', event.target.value)} />
          <div></div>
          <Button variant="contained" color="secondary" className="button" onClick={() => this.generate()} >
            Siguiente
          </Button>
          <div></div>
        </div>
        <div className="column2" >
          <div className="step1" >
            <Chip className="chips" avatar={<Avatar>1</Avatar>} label="Paso" color="primary" />
            <img className="img" src={recurso2} />
            {this.state.miniMatrix}
          </div>
          <div className="step666" >
            <Chip className="chipss" avatar={<Avatar>2</Avatar>} label="Paso" color="primary" />
            <span className="span" >Encontrar el polinomio caracteristico</span>
            {this.state.polinomioCaracteristico}
          </div>
        </div>
      </div>
    )
  }


  matrixWithLambda() {
    let miniMatrix = (
      <div className="gridMatrix" >
        <div className="miniGrid" style={{ marginLeft: 'auto', marginRight: '10px' }} >
          <div className="bla" >{this.state.pos0_0}</div>
          <div className="bla" >{this.state.pos0_1}</div>
          <div className="bla" >{this.state.pos0_2}</div>

          <div className="bla" >{this.state.pos1_0}</div>
          <div className="bla" >{this.state.pos1_1}</div>
          <div className="bla" >{this.state.pos1_2}</div>

          <div className="bla" >{this.state.pos2_0}</div>
          <div className="bla" >{this.state.pos2_1}</div>
          <div className="bla" >{this.state.pos2_2}</div>
        </div>
        <span style={{ marginTop: '25px' }} >-</span>
        <div className="miniGrid" style={{ marginLeft: '10px' }} >
          <div className="bla" >{'λ'}</div>
          <div className="bla" >0</div>
          <div className="bla" >0</div>
          <div className="bla" >0</div>
          <div className="bla" >{'λ'}</div>
          <div className="bla" >0</div>
          <div className="bla" >0</div>
          <div className="bla" >0</div>
          <div className="bla" >{'λ'}</div>
        </div>
        <span style={{ marginTop: '25px' }} >=</span>
        <div className="miniGrid" style={{ marginLeft: '10px' }} >
          <div className="bla" >{'-λ'}</div>
          <div className="bla" >{this.state.pos0_1}</div>
          <div className="bla" >{this.state.pos0_2}</div>

          <div className="bla" >{this.state.pos1_0}</div>
          <div className="bla" >{'-λ'}</div>
          <div className="bla" >0</div>

          <div className="bla" >0</div>
          <div className="bla" >{this.state.pos2_1}</div>
          <div className="bla" >{'-λ'}</div>
        </div>
      </div>
    )
    this.setState({ miniMatrix, contador: 1 })
  }

  getPolinomioCaracteristico() {
    let polinomioCaracteristico = (
      <div className="polinomio" >
        <div className="primero" >
          <div className="primerTermino" >
            <div className="bla" >{'-λ'}</div>
            <div className="bla" >0</div>
            <div className="bla" >{this.state.pos2_1}</div>
            <div className="bla" >{'-λ'}</div>
          </div>
          <div style={{ marginRight: 'auto' }} >
            {this.state.lambda + '(' + this.state.lambda + '^2' + '-' + this.state.pos2_1 + '*' + 0 + ')' + '=' +
              `${this.state.lambda + '^3'}`}
          </div>
        </div>
        <div className="primero" >
          <div className="segundoTermino" >
            <div className="bla" >{this.state.pos1_0}</div>
            <div className="bla" >0</div>
            <div className="bla" >0</div>
            <div className="bla" >{'-λ'}</div>
          </div>
          <div style={{ marginRight: 'auto' }} >
            {'-1' + '(' + this.state.pos1_0 + '*' + 'λ' + '-' + 0 + ')' + '=' + 0.9 + 'λ'}
          </div>
        </div>
        <div className="primero" >
          <div className="tercerTermino" >
            <div className="bla" >{this.state.pos1_0}</div>
            <div className="bla" >{'-λ'}</div>
            <div className="bla" >0</div>
            <div className="bla" >{this.state.pos2_1}</div>
          </div>
          <div style={{ marginRight: 'auto' }} >
            {this.state.pos0_2 + '(' + this.state.pos1_0 + '*' + this.state.pos2_1 + '-' + 0 + ')' + '=' + 0.36}
          </div>
        </div>
      </div>
    )
    this.setState({ polinomioCaracteristico, contador: 2 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Crecimiento de poblaciones </h1>
        </header>
        {this.state.bigFlag ? this.renderFirstPart() : this.renderSecondPart()}
      </div>
    );
  }
}

