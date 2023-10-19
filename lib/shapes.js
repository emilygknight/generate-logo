class Circle {
    constructor(name, textcolor, color) {
        this.name = name;
        this.textcolor = textcolor;
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.name}</text>
      
      </svg>`
    }
    setColor(color) {
        this.color = color;
      }
 
};

class Triangle {
    constructor(name, textcolor, color) {
        this.name = name;
        this.textcolor = textcolor;
        this.color = color;
        
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textcolor}">${this.name}</text>
      
      </svg>`
    }
    setColor(color) {
        this.color = color;
      }
};

class Square {
    constructor(name, textcolor, color) {
        this.name = name;
        this.textcolor = textcolor;
        this.color = color;
    }
    render() {
        return `<rect x="10" y="20" r="80" width="300" height="300" fill="${this.color}" />`
    }
    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="20" r="80" width="300" height="300" fill="${this.color}" />
      
        <text x="150" y="125" font-size="125" text-anchor="middle" fill="${this.textcolor}">${this.name}</text>
      
      </svg>`
    }
    setColor(color) {
        this.color = color;
      }
};
// const circleOne = new Circle("QQQ", "blue", "black");
// console.log(circleOne);
// console.log(circleOne.renderSvg());

module.exports = {
    Circle,
    Triangle,
    Square
};