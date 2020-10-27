import React from 'react';
import store from "./reducer.js";
import axios from 'axios';
import True from './True.jsx';
import False from './False.jsx';
import appStyle from './app.module.css';

class App extends React.Component {
  constructor(arg) {
    super(arg)
    this.state = {
      mystore: store.getState(),
      addvalue: "",//添加输入框的值
      list: []
    }
    store.subscribe(() => {
      this.setState({ mystore: store.getState() });
    })
  }

  render() {
    return (<div className={appStyle.detailedList_Box}>
      <div>
        <div className={appStyle.listtitle}><h1>你的清单</h1></div>
        {/* 添加代办事项 */}
        <div className={appStyle.add_box}>
          <input onChange={(e) => { this.add(e) }}></input>
          <button onClick={this.addsubmit}>添加</button>
        </div>
        {/* 清单列表 */}
        <div className={appStyle.content_box}>
          <div>
            <h1>未完成</h1>
            {
              this.state.mystore.listwork.map((el, index) => {
                return (<div>
                  <False index={index} key={el.id} />
                </div>)
              })
            }
          </div>
          <div>
            <h1 style={{ color: "#b8de6f" }}>已完成</h1>
            {
              this.state.mystore.listwork.map((el, index) => {
                return (<div>
                  <True index={index} key={el.id} />
                </div>)
              })
            }
          </div>
        </div>
      </div>
    </div>)
  }

  componentDidMount() {
    axios.get("http://10.55.58.252:7001/list")
      .then((res) => {
        console.log(res.data);
        store.dispatch({ type: "listwork", value: res.data });
      });

    // 输入框的值改变
    this.add = function (e) {
      this.setState({ addvalue: e.target.value })
    };

    // 提交按钮---添加
    this.addsubmit = function () {
      if (this.state.addvalue) {
        let date = (new Date()).toLocaleString()
        console.log(date);
        axios.get("http://10.55.58.252:7001/add", { params: { text: this.state.addvalue, time: date } })
          .then((res) => {
            console.log(res.data);
            if (res.data.affectedRows > 0) {// 插入成功
              axios.get("http://10.55.58.252:7001/list")
                .then((res) => {
                  console.log(res.data);
                  store.dispatch({ type: "listwork", value: res.data });
                });
            }
          })
      } else {
        alert("输入为空！")
      }
    }.bind(this);
  }
}

export default App;
