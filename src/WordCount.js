import React, {Component} from 'react';

class WordCount extends Component{
    constructor(props){
        super(props)
        this.state = {
            sentence: "",
            word: "",
            count: 0,
            counter: 0
        }
    }

    sentence(e){
        e.preventDefault(e);
        this.setState({sentence: e.target.value})
    }

    word(e){
        e.preventDefault(e);
        this.setState({word: e.target.value})
    }

    handlerCounter(e){
        e.preventDefault(e);
        let sent = this.state.sentence;
        sent = sent.split(" ");
        let len = sent.length
        let count = 0;
        let wor = this.state.word;
        this.setState({count: len})  
        sent.forEach(element => {
            if(element === wor){
                count = count + 1;
            }
        });
        this.setState({counter: count})
    }


    render(){
        return(
            <div>
                <input type = "text" placeholder="Sentence" onChange={(e)=>this.sentence(e)}></input>
                <input type = "text" placeholder = "Word" onChange={(e)=>this.word(e)}></input>
                <button onClick = {(e)=>this.handlerCounter(e)}>Count</button>
                <div>
                    Display: {this.state.sentence}<br/>
                    Total word: {this.state.count}<br/>
                    Total occurred word: {this.state.counter}
                </div>
            </div>
        )
    }
}

export default WordCount;