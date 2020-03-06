
import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../src/components/card';
import api from '../src/api';

test('returns result if array', () => {
   api.getFeaturedPlaylists(0)
    .then(((onResponse) => {
      expect(onResponse).toBe((onResponse) => {
        if (typeof onResponse.json().playlists.items == 'array') {
          return true
        }
        else {
          return false
        }
      });
    }))
});

test('card renders correctly', () => {
  const tree = renderer.create(
    <Card
      image={'https://pbs.twimg.com/profile_images/1216813945408966663/vkVajfRz_400x400.jpg'}
      name={'test'}
      owner={'by test'}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});