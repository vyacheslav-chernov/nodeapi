      class Hello extends React.Component {

        constructor(props) {
          super(props);

          this.state = { title: "" };
        }
        componentDidMount() {
        }

        render(){
          const { message, title } = this.props;

          return <div>
                    <h1>{ message }{ ( this.state.title ) } </h1>
                    <button onClick={this.clickme.bind(this)}>click</button>
                </div>;
        }
        clickme(){
          fetch("api/version")
            .then( (res) => res.json() )
            .then( ( data ) => { this.setState( { title: 'Version = '+data.result+' / '+(new Date()).toString()} ) } );
        }

      }

      ReactDOM.render(
        <Hello message="Hello, world! It's my first react app, making by self !!! " />,
        document.getElementById('root')
      );
