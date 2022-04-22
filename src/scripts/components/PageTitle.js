import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/PageTitle.css';

class PageTitle extends Component {
  render() {
    return (
      <div className='center-title'>
        <div className='section-red text-primary'>{this.props.sectionName}</div>
        <div className='big-title text-dark'>{this.props.title}</div>
        <div className='subtitle text-secondary fs-5'>{this.props.subtitle}</div>
        {this.props.children}
      </div>
    );
  }
}

PageTitle.propTypes = {
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  chjildren: PropTypes.element,
};

export default PageTitle;
