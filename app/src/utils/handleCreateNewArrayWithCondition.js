let arr = []

const handleCreateNewArrayWithCondition = (list, target) => {
    for (const item of list) if(item[target]) arr.push(item)
    return arr
}

export default handleCreateNewArrayWithCondition