import { tag, template, useShadow } from "slim-js/Decorators";

@tag('info-popup')
@useShadow(true)
@template(/*html*/`
${require('./info-popup.style.html')}
<style>

  :host {
    font-size: 0.6rem;
  }

  #comparison * {
    font-size: 0.5rem;
  }

  #comparison thead {
    padding-top: 0.3px;
    padding-bottom: 0.3px;
    text-align: left;
    background-color: #f15924;
    color: white;
  }

  #comparison tr:nth-child(even) {
    background-color: #ffe0d5;
  }

  #comparison {
    border-collapse: collapse;
    width: 100%;
  }

  #comparison ul {
    list-style-type: none;
    padding: 0;
  }

  #comparison, #comparison th, #comparison td {
    border: 1px solid lightgray;
    padding: 0.2rem;
  }

  #comparison .data-binding-info {
    text-align: center;
  }

  #comparison .rating {
    font-size: 0.7rem;
    letter-spacing: -3px;
  }
</style>
<h3>Comparison</h3>
  <p>Slim.js has just the right balance between being feature-rich and lightweight. It has a small learning-curve, high performance, less memory footprint and supported by all evergreen browsers.</p>
  <table id="comparison">
    <thead>
      <td>Library</td>
      <td>Performance</td>
      <td>Data Binding</td>
      <td>Code style</td>
      <td>Tools</td>
      <td>Size (GZipped)</td>
    </thead>
    <tbody>
      <tr>
        <td>Slim.js</td>
        <td class="rating">⭐⭐⭐⭐⭐</td>
        <td class="data-binding-info">✅ Built-in</td>
        <td>
          <ul>
            <li>Declarative</li>
            <li>Typescript / Javascript</li>
          </ul>
        </td>
        <td>Optional 👍</td>
        <td>4.5K</td>
      </tr>
      <tr>
        <td>Polymer</td>
        <td class="rating">⭐⭐</td>
        <td class="data-binding-info">✅ Built-in</td>
        <td>
          <ul>
            <li>Declarative</li>
            <li>Explicit</li>
            <li>Javascript</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Polymer-cli</li>
            <li>Polymer-server</li>
          </ul>
        </td>
        <td>100K</td>
      </tr>
      <tr>
        <td>x-tag</td>
        <td class="rating">⭐⭐⭐⭐</td>
        <td class="data-binding-info">N/A</td>
        <td>Imperative</td>
        <td>None 👍</td>
        <td>6.5K</td>
      </tr>
      <tr>
        <td>skateJs</td>
        <td class="rating">⭐⭐⭐⭐</td>
        <td class="data-binding-info">Unidirectional JSX + preact</td>
        <td>
          <ul>
            <li>JSX</li>
            <li>Requires renderer</li>
          </ul>
        </td>
        <td>Requires Babel/JSX</td>
        <td>7.1K (with renderer)</td>
      </tr>
      <tr>
        <td>Stencil</td>
        <td class="rating">⭐⭐⭐</td>
        <td class="data-binding-info">Unidirectional TSX + Virtual DOM</td>
        <td>
          <ul>
            <li>TSX</li>
            <li>Typescript only</li>
          </ul>
        </td>
        <td>Stencil compiler</td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
`)
class InfoPopup extends Slim {}