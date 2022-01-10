import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

function sanitizeName(name: string): string | undefined {
  if (!name) return;
  return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
}

@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.css',
  shadow: true,
})
export class AppHome {
  @Prop() name: string;

  @Prop() match: MatchResults;

  get _name() {
    return sanitizeName(this.name || this.match.params.name);
  }

  render() {
    return (
      <div class="hello-world">
        Hello {this._name || 'World'}
      </div>
    );
  }
}
