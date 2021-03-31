let arr = []

const handleCreateNewArray = (list, target) => {
    for (const item of list) if(item[target]) arr.push(item)
    console.log('Novo array', arr)
    return arr
}

export default handleCreateNewArray