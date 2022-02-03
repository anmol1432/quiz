export const nextQuestion = 'NextQuestion'


export const nextQues = (indexNumber) => {
    return ({
        type: nextQuestion,
        payload: {
            indexNumber
        }
    })
}

