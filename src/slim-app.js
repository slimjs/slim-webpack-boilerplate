import {Slim} from 'slim-js';
import './components/tvee-searchbar';
import './components/tvee-show';

Slim.tag('slim-app',
    
`
<tvee-searchbar on-search="executeQuery" search-text="SEARCH"></tvee-searchbar>
<div>
    <tvee-show slim-repeat="shows" slim-repeat-as="data"></tvee-show>
</div>
`,

class extends Slim {

    onBeforeCreated() {
        this.ENDPOINT = "http://api.tvmaze.com/search/shows?q=";
    }

    executeQuery(query) {
        fetch( this.ENDPOINT + query)
            .then( response => response.json())
            .then( data => {
                this.updateResults(data);
            });
    }

    updateResults(data) {
        this.shows = data;
    }

});