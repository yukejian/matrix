import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    // 将初始化值赋值给state
    this.initValue = {
      name: '',
      job: ''
    };
    this.state = this.initValue;
  }
  // input标签内容改变时执行
  handleChange = (e) => {
    // 改变name的值
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  // 点击提交按钮时执行的操作
  submitForm = () => {
    // 这个方法是app.js那边传过来的，这个需要把用户输入的数据传过去
    this.props.handleSubmit(this.state)
    // 重置input的value值
    this.setState(this.initValue)
  }
  render() {
    // this.state 每次只存一组值
    const {name, job} = this.state
    return (
      <form>
        <label>
          Name:
        </label>
        <input type="text" value={name} name="name" onChange={this.handleChange} /><br />
        <label>
          Job:
        </label>
        <input type="text" value={job} name="job" onChange={this.handleChange} /><br />
        <input type="button" value="新增" onClick={this.submitForm} />
      </form>
    )
  }
  }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      head:['name1','name2'],
      body:['body1','body2']
    };
  }
  handleSubmit = (valObj) => {
    console.log(valObj);
    // 通过解构的方式，把传过来的数据添加到Body数组里，
    this.setState({
      name: valObj.name,
      body: valObj.job
    })
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h4>Hello React !</h4>
        {/*传递数据*/}
        <Table Head={this.state} />
      </header>
      <Form  handleSubmit={this.handleSubmit}/>
    </div>
    )
  }
}

class Table extends React.Component{
  render(){
    const Head = this.props.Head;
    // console.log(Head);
    return(
      <table>
        <TableHead Head={Head} />
        <TableBody />
      </table>
    );
  }
}

function TableHead(props){
  // let HeadArr = Array.from(props.Head);
  console.log(props.Head);
  const myHead = props.Head.head.map((item,index) => {
    return <th key={index}>{item}</th>
  });
  return(
    <thead>
      <tr>
        {myHead}
      </tr>
    </thead>
  );
}

function TableBody(props){
  return(
    <tbody>
      <tr>
        <th>123</th>
        <th>456</th>
      </tr>
    </tbody>
  );
}
export default App
