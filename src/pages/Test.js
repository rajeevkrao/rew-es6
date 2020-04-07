import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      isLoaded: false,
    }
  }

  
  componentDidMount() {
    fetch('https://gomathafoundation.glitch.me/annlist')
      .then(res => res.json())
      .then(json => {
      
      
        this.setState({
          isLoaded: true,
          items: json.ann,
        })
      
    });
    
  }
  
  render(){
    
    
    var { isLoaded, items } = this.state;
    var content;
    if(!items[0])
      content=0;
    else
      content=1;
    if(!isLoaded) {
       return <div>Loading...</div>
    }
    
    else if(content){
      return(
        <div className="App">
          <ul>
            {items.map(function(item, index){
              return <li key={ index }><h4>{item}</h4></li>;
            })}
          </ul>
                  

        </div>
      );

    }
    else{
      return(<div>No Announcements</div>);
    }
  }
}

export default App;