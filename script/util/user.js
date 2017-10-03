/**
 * Created by linGo on 2017/10/2.
 */
 class User{
   constructor({num,name, age, sex, portrait}){
      this.num = num
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.portrait = portrait;
   }
}

export function createUser(userData){
   return new User({
     num: userData.num,
     name: userData.name,
     age: userData.age,
     sex: userData.sex,
     portrait: userData.portrait
   })
}

export function getUserList(){
  var storage = window.localStorage;
  if(!storage.users){
    addUser({
      name: '陈锐林(示例)',
      age: '21',
      sex: 'male',
      portrait: 'http://img4.imgtn.bdimg.com/it/u=3929251423,454148251&fm=27&gp=0.jpg'
    })
    addUser({
      name: '浪子林(示例)',
      age: '21',
      sex: 'male',
      portrait: ''
    })
    var users = storage.users;
  }else{
    var users = storage.users;
  }
  return JSON.parse(users);
}

export function addUser(user){
  var storage = window.localStorage;
  var users = JSON.parse(storage.users?storage.users:'[]');
  user.num = users.length+1;
  users.push(user)
  storage.users = JSON.stringify(users);
  return users
}

export function deleteUser(num){
  var storage = window.localStorage;
  var users = JSON.parse(storage.users?storage.users:'[]');
  var series = 1;
  for(var i=0; i<users.length; i++){
    if(users[i].num != num){
      users[i].num = series++;
    }else{
      users.splice(i--,1)
    }
  }
  storage.users = JSON.stringify(users);
  return users
}
