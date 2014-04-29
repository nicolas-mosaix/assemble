/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;
var path = require('path');
var _ = require('lodash');

var assemble = require('../');

describe('plugin', function() {

  it('should load plugins', function(done) {
    var options = {
      name: 'plugin-test-1',
      source: 'Some Template',
      data: {
        plugins: [path.join(__dirname, '../examples/plugins/example-js.js')]
      }
    };
    assemble(options).build(function (err, results) {
      if (err) {
        console.log('Error:', err);
      }
      expect(_.keys(results.plugins).length).to.not.eql(0);
      done();
    });
  });

});
