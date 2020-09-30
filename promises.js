//wrapper - async unit of work

// pending = working
// fulfilled = success
// rejected = failed
// settled = fulfilled or rejected

//Event loop
// Queue [fun(100ms),fun3(10ms)]
// PromisesQueue[Promise(fun2(20000ms))]

async function main() {
  //Fetch user from db
  const fetchUser = new Promise(function (fulfill, rejected) {
    setTimeout(() => {
      fulfill("Jorge");
    }, 1000);
  });

  //no bloquea el flujo de ejecucion
  const promisedNumber = new Promise(function (fulfill, rejected) {
    setTimeout(() => {
      fulfill(10);
    }, 1000);
  });

  const promisedString = async () => {
    const message = await fetchUser;
    return message;
  };

  promisedNumber.then(console.log);

  console.log(await promisedString());
}
main();
