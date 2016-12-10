function exec(func, arg){
  func(arg);
}

exec((banana) => {
  console.log(banana);
}, "potato");