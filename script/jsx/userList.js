/**
 * Created by linGo on 2017/10/1.
 */
import React from 'react';

import {getUserList, addUser, deleteUser} from '../util/user'


var portrait = '../../portrait.png'

class UserList extends React.Component{
  constructor(){
    super();
  }
  toggleShow(event,num){
    this.state.hideArr[num] = !this.state.hideArr[num]
    var hideArr = this.state.hideArr;
    this.setState({
      hideArr: hideArr
    })
  }
  addUser(){
    var name = this.refs.inputName.value;
    var age = this.refs.inputAge.value;
    var sex = this.refs.inputSex.value;
    var portrait = this.refs.inputPortrait.value;
    if(!name || !age || !sex){
      alert('请将姓名、年龄、性别等信息填写完整')
      return
    }
    var newUser = {
      name: name,
      age,
      sex,
      portrait
    }
    var newUserList = addUser(newUser)
    this.setState({
      userList: newUserList
    })
    this.showMask();
  }
  deleteUser(e, num){
    e.stopPropagation()
    var newUserList = deleteUser(num);
    this.setState({
      userList: newUserList
    })
  }
  showMask(){
    var mask = !this.state.mask;
    this.setState({
      mask: mask
    })
  }
  stopPropo(e){
    e.stopPropagation();
  }
  render(){
    var _this = this;
    var list = this.state.userList.map( function(user){
      _this.state.hideArr[user.num] = !!_this.state.hideArr[user.num];
      return (
          <div className="user" key={user.num} >
            <div className="name" onClick={_this.toggleShow.bind(_this,event,user.num)}>
              {user.num + '.' +user.name}
              <div className="delete" onClick={_this.deleteUser.bind(_this,event, user.num)}>删除</div>
            </div>
            <div className={"userInfo" + " " +( _this.state.hideArr[user.num]?'':'hide')} >
              <img className="left" src={user.portrait?user.portrait:portrait} alt=""/>
              <div className="right">
                <div>姓名：<span>{user.name}</span></div>
                <div>年龄：<span>{user.age}</span></div>
                <div>性别：<span>{user.sex}</span></div>
              </div>
            </div>
          </div>
      )
    })
    return (
        <div>
          {list}
          <div className="addUser" onClick={this.showMask.bind(this)}>增加用户</div>
          <div className={"inputUserMask"+ " " + (this.state.mask?'':'hide')}
               onClick={this.showMask.bind(this)}>
            <div className="inputUser" onClick={this.stopPropo.bind(this)}>
              <label htmlFor="inputName" >姓名： <input ref="inputName" id="inputName" type="text"/></label><br/>
              <label htmlFor="inputAge" >年龄： <input ref="inputAge" id="inputAge" type="number"/></label><br/>
              <label htmlFor="inputSex" >性别： <input ref="inputSex" id="inputSex" type="text" /></label><br/>
              <label htmlFor="inputPortrait" >头像： <input ref="inputPortrait" id="inputPortrait" type="text" placeholder="请输入有效链接（可不填）" /></label><br/>
              <div id="addButton" onClick={this.addUser.bind(this)}>添加</div>
            </div>
          </div>
        </div>
    )
  }
  componentWillMount(){
    var userList = getUserList();
    this.setState({
      hideArr: {},
      mask: false,
      userList: userList
    })
  }
}

export default UserList;
