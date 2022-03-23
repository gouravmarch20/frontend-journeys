// a value not found on their execution context ==> by lexical scope their acess the value of a 

const a = 44
const b = () => {

    for (let i = 0; i < 3; i++) {
        console.log(a)

    }

    const c = () => {
        console.log(a + " ")
    }
    c()
}

b()