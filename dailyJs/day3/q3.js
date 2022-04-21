// short array ascending order
// -- insertion short
function shortArray ([...array]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] - array[j + 1] > 0) {
        const temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

console.log(shortArray([100, 83, 32, 9, 45, 61]))
// https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%250Afunction%2520shortArray%2520%28%255B...array%255D%29%2520%257B%250A%2520%2520for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520array.length%253B%2520i%252B%252B%29%2520%257B%250A%2520%2520%2520%2520for%2520%28let%2520j%2520%253D%25200%253B%2520j%2520%253C%2520array.length%2520-%25201%253B%2520j%252B%252B%29%2520%257B%250A%2520%2520%2520%2520%2520%2520if%2520%28array%255Bj%255D%2520-%2520array%255Bj%2520%252B%25201%255D%2520%253E%25200%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520temp%2520%253D%2520array%255Bj%2520%252B%25201%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520array%255Bj%2520%252B%25201%255D%2520%253D%2520array%255Bj%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520array%255Bj%255D%2520%253D%2520temp%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%2520%2520return%2520array%250A%257D%250A%250Aconsole.log%28shortArray%28%255B100%252C%252083%252C%252032%252C%25209%252C%252045%252C%252061%255D%29%29%250A