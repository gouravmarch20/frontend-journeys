// let run 3 time --> their scope & memory location is different --> closure avoid i to remove the varible to remove the varible
// 
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i)
  }
  setTimeout(log, 10)
}
