import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/property-card';

it('renders a property title', () => {
  const wrapper = shallow((
    <PropertyCard title="2 Bedroom House" />
  ));
  expect(wrapper.find('.property-card-title').text()).toContain('2 Bedroom House');
});

it('renders a property type', () => {
  const wrapper = shallow((
    <PropertyCard type="flat" />
  ));
  expect(wrapper.find('.property-card-type').text()).toContain('flat');
});

it('renders number of bathrooms', () => {
  const wrapper = shallow((
    <PropertyCard bathrooms="2" />
  ));
  expect(wrapper.find('.property-card-bathrooms').text()).toContain('2');
});

it('renders number of bedrooms', () => {
  const wrapper = shallow((
    <PropertyCard bedrooms="2" />
  ));
  expect(wrapper.find('.property-card-bedrooms').text()).toContain('2');
});

it('renders price', () => {
  const wrapper = shallow((
    <PropertyCard price="1000" />
  ));
  expect(wrapper.find('.property-card-price').text()).toContain('1000');
});

it('renders city location', () => {
  const wrapper = shallow((
    <PropertyCard city="Manchester" />
  ));
  expect(wrapper.find('.property-card-city').text()).toContain('Manchester');
});
