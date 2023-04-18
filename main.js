
function getDataPromise() {

    return res = fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {

        if(res.ok) {

            return res;
        }
        else {

            throw new Error('Bad response from server');
        }
    })
    .then(res => res.json())
    .then(data => data);
}

function handleResultPromise() {

    getDataPromise().then(res => {
        console.log(res)
       
    });
}

async function getDataAwait() {

    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok) throw new Error('Bad response from server');
    let users = await res.json();
    return users;
}


async function handleResultAsync(){

    try {

        let res = await getDataAwait();
        console.log(res);
    }
    catch(error) {

        console.log(error);
    }
}

console.log(getDataAwait());




handleResultPromise();
handleResultAsync();
