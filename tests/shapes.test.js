
const { Triangle, Circle, Square } = require('../lib/shapes');


test('Triangle render method should return the correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Square render method should return the correct SVG string', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toEqual('<rect x="10" y="20" r="80" width="300" height="300" fill="blue" />');
  });

  test('Circle render method should return the correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });