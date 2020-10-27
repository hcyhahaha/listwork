import React from 'react';
import store from "./reducer.js";
import axios from 'axios';
import appStyle from './app.module.css';

class True extends React.Component {
    constructor(arg) {
        super(arg)
        this.state = {
            mystore: store.getState(),
            isShow: false,// 是否显示编辑的输入框
            textupdate: "",// 编辑输入框改变的值
            list: []
        }
        store.subscribe(() => {
            this.setState({ mystore: store.getState() });
        })
    }
    render() {
        return (<div className={appStyle.content} style={{ display: this.state.mystore.listwork[this.props.index].isFinish ? "block" : "none" }}>
            <div>
                <button
                    style={{
                        outline: "none",
                        border: "1px solid #b8de6f",
                        width: "25px",
                        height: "25px",
                        color: "white",
                        borderRadius: "5px",
                        backgroundColor: "#b8de6f"
                    }}
                    onClick={(e) => { this.isFinish(e, this.state.mystore.listwork[this.props.index].id) }}>{this.state.mystore.listwork[this.props.index].isFinish}</button>
                <div
                    style={{
                        fontFamily: "幼圆",
                        paddingLeft: "20px",
                        marginBottom: "10px",
                        color: "#b8de6f"
                    }}
                    className={appStyle.text}>{this.state.mystore.listwork[this.props.index].text}</div>
            </div>
            <span
                style={{
                    fontSize: "14px",
                    paddingLeft: "20px",
                    color: "#99a8b2"
                }}
                className={appStyle.timedate}>{this.state.mystore.listwork[this.props.index].time}</span>
            <button
                style={{
                    position: "absolute",
                    bottom: "3px",
                    right: "20%",
                    width: "35px",
                    height: "25px",
                    outline: "none",
                    fontFamily: "幼圆",
                    marginRight: "5px",
                    color: "#94b4a4",
                    borderRadius: "5px",
                    border: "1px solid #94b4a4",
                    backgroundColor: "white"
                }}
                className={appStyle.edit} onClick={(e) => { this.edit(e, this.state.mystore.listwork[this.props.index].id) }}>编辑</button>
            <button
                style={{
                    position: "absolute",
                    bottom: "3px",
                    right: "5%",
                    width: "35px",
                    height: "25px",
                    outline: "none",
                    fontFamily: "幼圆",
                    marginRight: "5px",
                    color: "#94b4a4",
                    borderRadius: "5px",
                    border: "1px solid #94b4a4",
                    backgroundColor: "white"
                }}
                className={appStyle.del} onClick={(e) => { this.delbtn(e, this.state.mystore.listwork[this.props.index].id) }}>删除</button>
            <div style={{ display: this.state.isShow ? "block" : "none", }}>
                <div style={{ width: "192px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <input
                        style={{
                            height: "25px",
                            outline: "none",
                            paddingLeft: "5px",
                            border: "1px solid #94b4a4"
                        }}
                        onChange={(e) => { this.textupdate(e) }} type="text" placeholder="输入更改内容" />
                    <button
                        style={{
                            width: "30px",
                            height: "27px",
                            outline: "none",
                            fontSize: "12px",
                            border: "1px solid #94b4a4",
                            backgroundColor: "white"
                        }}
                        onClick={(e) => { this.sendbtn(e, this.state.mystore.listwork[this.props.index].id) }}>发送</button>
                </div>
            </div>
        </div>)
    };

    componentDidMount() {
        // 是否完成清单--True
        this.isFinish = function (e, id) {
            axios.get("http://10.55.58.252:7001/updatetrue", { params: { id: id } })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.affectedRows > 0) {
                        axios.get("http://10.55.58.252:7001/list")
                            .then((res) => {
                                console.log(res.data);
                                store.dispatch({ type: "listwork", value: res.data });
                            });
                    }
                });
        }

        // 编辑输入框的值改变
        this.textupdate = function (e) {
            this.setState({ textupdate: e.target.value })
        };

        // 点击编辑按钮
        this.edit = function (e, id) {
            this.setState({ isShow: !this.state.isShow })
        }

        // 点击发送按钮 
        this.sendbtn = function (e, id) {
            if (this.state.textupdate) {
                let date = (new Date()).toLocaleString()
                axios.get("http://10.55.58.252:7001/listupdate", {
                    params: {
                        text: this.state.textupdate,
                        time: date,
                        id: id
                    }
                }).then((res) => {
                    console.log(res.data);
                    if (res.data.affectedRows > 0) {// 更新成功
                        this.setState({ isShow: !this.state.isShow })
                        axios.get("http://10.55.58.252:7001/list")
                            .then((res) => {
                                console.log(res.data);
                                store.dispatch({ type: "listwork", value: res.data });
                            });
                    }
                })
            } else {
                alert("输入为空")
            }
        }

        // 点击删除按钮
        this.delbtn = function (e, id) {
            axios.get("http://10.55.58.252:7001/del", { params: { id: id } })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.affectedRows > 0) {
                        axios.get("http://10.55.58.252:7001/list")
                            .then((res) => {
                                console.log(res.data);
                                store.dispatch({ type: "listwork", value: res.data });
                            });
                    }
                });
        }
    }
}

export default True;