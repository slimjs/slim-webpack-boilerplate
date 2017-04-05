import { Slim } from 'slim-js';

Slim.tag('tvee-show',
`
<div class="main">
    <span class="title" bind click="handleClick">[[data.show.name]]</span>
    <img width="100%" src="[[data.show.image.medium]]" />
</div>
<style>
    :host {
        display: inline-flex;
        width: 10em;
    }
    .main {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .main .title {
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 0.5em;
    }

    .main img {
        display: inline-flex;
        flex: 1;
        width: 100%;
    }
</style>
`,
class extends Slim {
    get useShadow() { return true; }

    handleClick() {
        window.open( this.data.show.url, '_blank');
    }

    dataChange() {
        alert('data changed');
    }
});