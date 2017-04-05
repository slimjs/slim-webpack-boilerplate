import {Slim} from 'slim-js';

Slim.tag('tvee-searchbar',

`
<div>
    <input #inp type="text" />
    <button type="button" click="handleClick" bind>[[searchText]]</button>
</div>
`,


class extends Slim {
    handleClick() {
        if (this.inp.value && this.inp.value) {
            this.callAttribute('on-search', this.inp.value);
        }
    }
});