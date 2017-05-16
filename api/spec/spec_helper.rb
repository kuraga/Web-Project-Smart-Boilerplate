ENV['RACK_ENV'] ||= 'test'

require 'simplecov'
SimpleCov.start

require File.join(File.dirname(__FILE__), '..', 'init')

require 'minitest/autorun'
