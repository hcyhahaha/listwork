import { createStore } from "redux";

// 私有化的仓库对象
var store = {
    time: "",//日期时间
    listwork: []
}

const reducer = function (state = store, action) {
    console.log(state, action);//action是dispatch传入的对象
    if (action.type === "time") {
        state.time = action.value;
    }
    if (action.type === "listwork") {
        state.listwork = action.value;
    }
    return { ...state };//设置新的数据，创建新的对象，把原对象中的数据拷贝过来，返回
};
var obj = createStore(reducer)

export default obj;
// 导出模块化特点：内部变量私有化，不会污染全局