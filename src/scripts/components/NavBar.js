import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.menu = createRef();

    this.state = {
      hidden: true,
    };
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
        try {
          const element = children[child];
          const pageName = element.innerText;

          if (path === this.toKebabCase(pageName)) {
            element.className = 'menu-item active';
          } else {
            element.className = 'menu-item';
          }
        } catch (error) {}
      }
    }
  }

  render() {
    return (
      <div>
        <div className='space-replace'></div>
        <div className='sticky'>
          <div className={`navbar container-xxl custom-padding${this.state.hidden ? ' hidden' : ''}`}>
            <div className='title'>
              <Link className='app-title' to={`/`}>
                Destination App
              </Link>
              <svg
                onClick={() => {
                  if (this.state.hidden) {
                    this.setState({
                      hidden: false,
                    });
                  } else {
                    this.setState({
                      hidden: true,
                    });
                  }
                }}
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-menu-2 menu-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='#2e2e2e'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <line x1='4' y1='6' x2='20' y2='6'></line>
                <line x1='4' y1='12' x2='20' y2='12'></line>
                <line x1='4' y1='18' x2='20' y2='18'></line>
              </svg>
            </div>
            <div ref={this.menu} className='nav-menu'>
              <Link className='menu-item ' to={`/`} onClick={(e) => this.changeActive(e)}>
                Home
              </Link>
              <Link className='menu-item' to={`/destinations`} onClick={(e) => this.changeActive(e)}>
                Destinations
              </Link>
              <Link className='menu-item' to={`/about-us`} onClick={(e) => this.changeActive(e)}>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
