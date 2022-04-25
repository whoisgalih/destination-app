import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.menu = createRef();
  }

  changeActive(e) {
    const target = e.target;
    const text = target.innerText;
    const parentChildren = target.parentElement.children;

    for (const child in parentChildren) {
      if (Object.hasOwnProperty.call(parentChildren, child)) {
        const element = parentChildren[child];
        const pageName = element.innerText;

        if (pageName === text) {
          element.className = 'menu-item active';
        } else {
          element.className = 'menu-item';
        }
      }
    }
  }

  toKebabCase(text) {
    return text.toLowerCase().replace(' ', '-');
  }

  componentDidMount() {
    let path = window.location.pathname + '/';

    if (path === '//') {
      path = '/home/';
    }

    path = path.substring(path.indexOf('/') + 1, path.indexOf('/', 1));

    const menu = this.menu.current;
    const children = menu.children;
    for (const child in children) {
      if (Object.hasOwnProperty.call(children, child)) {
        const element = children[child];
        const pageName = element.innerText;

        if (path === this.toKebabCase(pageName)) {
          element.className = 'menu-item active';
        } else {
          element.className = 'menu-item';
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div className='navbar container-xxl custom-padding'>
          <Link className='app-title' to='/'>
            Destination App
          </Link>
          <div ref={this.menu} className='nav-menu'>
            <Link className='menu-item ' to='/' onClick={(e) => this.changeActive(e)}>
              Home
            </Link>
            <Link className='menu-item' to='/destinations' onClick={(e) => this.changeActive(e)}>
              Destinations
            </Link>
            <Link className='menu-item' to='/about-us' onClick={(e) => this.changeActive(e)}>
              About Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
