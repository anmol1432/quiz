import { nextQuestion } from "../action/quiz";

export const initialState = {
    loading: true,
    que:[{
        question: 'what is javascript 🤹‍♂️ ?',
        options:[
            {
                ansr: 'javascript is interpreted language',
                id: "qwe456yuiop"
            }, {
                ansr: 'javascript is compiled languager',
                id: "sAwerfvbnjiop;[-09876r"
            },{
                ansr: 'javascript is both compiled and interpreted language2',
                id: "sAwerfvbnjiop"
            }, {
                 ansr: 'javascript is not a programming language3',
                id: "fvbnjiop"
            }
        ],
    },
        {
        question: 'what is react 🤹‍♂️ ?',
        options:[
            {
                ansr: 'react is ui framework',
                id: "qe456yuiop"
            }, {
                ansr: 'react is ui library',
                id: "Awerfvbnjiop;[-09876r"
            },{
                ansr: 'react is programming',
                id: "sArfvbnjiop"
            }, {
                 ansr: 'none of the above',
                id: "fvjiop"
            }
        ],
        },
          {
        question: 'what is node.js 🤹‍♂️ ?',
        options:[
            {
                ansr: 'nodeJs is run time enviorment',
                id: "qe45iop"
            }, {
                ansr: 'nodeJs is language ',
                id: "Awerfvbnjiop76r"
            },{
                ansr: 'node js is programming',
                id: "sArfnjiop"
            }, {
                 ansr: 'none of the above',
                id: "fvjiop"
            }
        ],
    },
    ],
    ansr:["qwe456yuiop","Awerfvbnjiop;[-09876r", 'qe45iop'],
    currentQuestion: {},
    currentQuestionIndex:0
}

const questions = (state = initialState, action) => {
    switch (action.type) {
        case nextQuestion:
            console.log("action.payload.indexNumber ", action.payload.indexNumber);
            if (action.payload.indexNumber) {
                return ({...state,currentQuestion:state.que[action.payload.indexNumber]});
            }
            return ({...state,currentQuestion:state.que[state.currentQuestionIndex]});
        default:
            return state
    }
}


export default questions 
