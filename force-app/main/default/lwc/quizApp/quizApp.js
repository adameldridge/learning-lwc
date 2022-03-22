import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={};
    correctAnswers = 0;
    isSubmitted = false;
    myQuestions=[
        {
            id:"Question 1",
            question: "Which one of the following is not a template loop?",
            answers:{
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question 2",
            question: "Which one of the file is invalid in the LWC component folder?",
            answers:{
                a: ".svg",
                b: "apex",
                c: ".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question 3",
            question: "Which one of the following is not a directive?",
            answers:{
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer:"c"
        }
    ];

    // disables submit button until all have been selected
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // applies dynamic class based on results
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
    }

    // called every time option is slected
    changeHandler(event){
        const {name, value} = event.target;
        this.selected={...this.selected, [name]:value};
    }

    // submit form handler
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }

    // reset form handler
    resetHandler(){
        this.selected={};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
    
}