import react from './react';

class App extends React.Components
{
   constructor
   {
    super(props);
    this.state.value=null;
    
   }
   
   render(){
    return(
          <div>
            <h1>Hello World!</h1>
          </div>
    );
   }
}

export default App;
