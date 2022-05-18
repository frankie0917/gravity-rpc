import { Service } from './Service.js';

export class foo extends Service {
  greetings(to = 'world') {
    return `Hello ${to}!`;
  }
}
