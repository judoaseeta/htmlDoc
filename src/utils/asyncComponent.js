import React from 'react';
function asyncComponent(
    asyncLoader,
) {
    return class AsyncComponent extends React.Component {
        static Component = null; 
        state = {
            MainComponent: AsyncComponent.Component
        };
        componentDidUpdate() {
            // Perf.stop();
            // Perf.printInclusive();
            // Perf.printWasted();
        }
        componentWillMount() {
            if (!this.state.MainComponent) {
                asyncLoader()
                    .then(module => module.default || module)
                    .then((component) => {
                        // Perf.start();
                        this.setState({
                            MainComponent: component
                        });
                    });
            }
        }
        render () {       
            const { MainComponent } = this.state;
            if (MainComponent) {
              return (
                <MainComponent {...this.props} />
              );
            }
            return null;
        }
    };
}
export default asyncComponent;