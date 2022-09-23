import './App.css'
import { Configuration, OpenAIApi } from "openai";
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.prompt = 'just give me a number for the average carbon storage of a mature tropical rainforest in metric tons per hectare ';
    this.state = { result: 'loading' };

    const configuration = new Configuration({
      // TODO: Keep api key in environment variable
      apiKey: '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',
      "max_tokens": 1,
      "temperature": 0,
    });
    this.openai = new OpenAIApi(configuration);
    this.refreshAnimal();
  }

  async refreshAnimal() {
    const completion = await this.openai.createCompletion({
      model: "text-davinci-002",
      prompt: this.prompt,
    });
    this.setState({result: completion.data.choices[0].text});
  }
  render () {

    return (
      <main>
        {this.prompt}
        <h2>
          {this.state.result}
        </h2>
      </main>
    )
  }
}
export default App;