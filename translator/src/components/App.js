import React from 'react';
import '../css/App.css';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
	state = { language: 'english'};

	selectLanguage = (language) => {
		this.setState ({language : language});
	}

	render() {
		return (
			<div className="ui container"> 
				<div>
					Select Country:
					<div className="language-button">
						<i className="flag us" onClick={() => this.selectLanguage('english')} />
						<i className="flag in" onClick={() => this.selectLanguage('hindi')} />
						<i className="flag nl" onClick={() => this.selectLanguage('dutch')} />
					</div>
				</div> 
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
			</div>
		);
	}
}

export default App;