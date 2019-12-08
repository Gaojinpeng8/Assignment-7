function sayInfo(age) {
    console.log("name:"+this.name)
    console.log("age:"+age)
  }
  var user = {
    name: "zzx"
  }
  
  //name:zzx context content
  //age:100
  Function.prototype.call2 = function (a) {
    var content = a;
    content.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length ; i < len; i++) {
       args.push('arguments[' + i + ']');
     }
    var result = eval('content.fn('+args+')');
    return result;
  }
  sayInfo.call2(user,100)  